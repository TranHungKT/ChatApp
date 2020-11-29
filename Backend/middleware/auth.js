const { User } = require("../modal/userSchema");

const auth = (req, res, next) => {
  const token = req.cookies.w_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true,
      });
    // console.log(user);
    if (user.role !== 1) {
      return res.json({
        isAuth: false,
        error: true,
        role: "Ront role",
      });
    }
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
