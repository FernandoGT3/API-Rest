import jsonwebtoken from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      errors: ['Login Required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    req.userId = id;

    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token Expirado ou Inválido'],
    });
  }
};
