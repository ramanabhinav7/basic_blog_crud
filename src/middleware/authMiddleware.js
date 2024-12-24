const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwtConfig');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.userId = decoded.userId;
    next();
  });
};

module.exports = authMiddleware;