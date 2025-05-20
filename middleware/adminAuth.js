const adminAuth = (req, res, next) => {
  if (req.body.keybind === '=' && req.body.password === 'DEV)$@*') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = adminAuth;
