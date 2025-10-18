import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('❌ JWT_SECRET não definido no ambiente.');
  process.exit(1);
}

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: 'Token não fornecido.' });

  const [scheme, token] = authHeader.split(' ');
  if (!/^Bearer$/i.test(scheme) || !token)
    return res.status(401).json({ error: 'Formato de token inválido.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
}

export function verifyRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user)
      return res.status(401).json({ error: 'Usuário não autenticado.' });

    if (!allowedRoles.includes(req.user.role))
      return res.status(403).json({ error: 'Acesso negado.' });

    next();
  };
}
