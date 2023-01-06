const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) {
        console.log('errorVetify', err.message);
        res.status(403).json('Token is not valid!');
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json('You are not authenticated!');
    return
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params._id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not alowed to do that!');
      return
    }
  });
};

const verifyTokenIsAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not alowed to do that!');
      return
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenIsAdmin,
};
