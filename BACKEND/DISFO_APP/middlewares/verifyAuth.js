const password = "Abracadabra";
const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization !== password) {
    return res.status(403).json({ message: "Unauthorized Access !!!!!" });
  }
  next();
};

module.exports = verifyAuth;
