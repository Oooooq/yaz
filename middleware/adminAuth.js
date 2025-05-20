const adminAuth = (req, res, next) => {
    if (req.session.isAdmin) {
        return next();
    }
    res.status(403).send({ message: 'Access denied to this resource.' });
};

module.exports = adminAuth;
