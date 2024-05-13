const pwd = process.env.ROUTE_PWD;
const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization !== pwd) {
    return res.status(403).json({ message: "Unauthorized Access !!!!" });
  }
  next();
};

module.exports = verifyAuth;
