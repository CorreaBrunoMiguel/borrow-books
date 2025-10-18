import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: 'Token não fornecido.' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
}

export function verifyRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user)
      return res.status(403).json({ message: 'Usuário não autenticado.' });
    if (!allowedRoles.includes(req.user.role))
      return res.status(403).json({ message: 'Acesso negado' });
    next();
  };
}
