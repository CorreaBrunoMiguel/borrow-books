import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Middleware de autenticação
 * Valida o token JWT e injeta os dados do usuário no objeto req.
 */
export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.warn(`[Auth] Token não fornecido — ${new Date().toISOString()}`);
    return res.status(401).json({
      code: 401,
      message: 'Token não fornecido.',
      timestamp: new Date().toISOString(),
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(`[Auth] Token inválido ou expirado — ${error.message}`);
    return res.status(403).json({
      code: 403,
      message: 'Token inválido ou expirado.',
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Middleware de autorização
 * Garante que apenas usuários com os papéis permitidos acessem a rota.
 * Exemplo de uso: verifyRole('ADMIN', 'BIBLIOTECARIO')
 */
export function verifyRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      console.warn(`[Auth] Acesso negado — usuário não autenticado.`);
      return res.status(403).json({
        code: 403,
        message: 'Usuário não autenticado.',
        timestamp: new Date().toISOString(),
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      console.warn(
        `[Auth] Acesso negado — usuário ${req.user.email} com papel ${req.user.role}`
      );
      return res.status(403).json({
        code: 403,
        message: 'Acesso negado. Permissão insuficiente.',
        timestamp: new Date().toISOString(),
      });
    }

    console.info(
      `[Auth] Acesso autorizado — ${req.user.email} (${req.user.role})`
    );
    next();
  };
}
