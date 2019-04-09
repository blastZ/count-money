const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const { name, password } = req.body;
  const { COOKIE_DOMAIN } = sails.config.custom;

  if (
    !name ||
    !password ||
    typeof name !== 'string' ||
    typeof password !== 'string' ||
    name.trim() === '' ||
    password.trim() === '' ||
    password.trim().length < 6
  ) {
    return res.bad('参数错误');
  }

  try {
    const user = (await User.find({
      where: {
        name,
        deleted: false
      }
    }))[0];

    if (!user) {
      return res.bad(`User Don't Exist`);
    }

    const samePassword = await bcrypt.compare(password.trim(), user.password);

    if (!samePassword) {
      return res.bad('Wrong Password');
    }

    const config = {
      domain: COOKIE_DOMAIN,
      maxAge: 7 * 24 * 3600 * 1000,
      httpOnly: true
    };

    const jwtPayload = {
      user_id: user.id,
      user_name: user.name,
      exp: Math.floor(Date.now() / 1000 + 3600 * 24 * 7),
      iat: Math.floor(Date.now() / 1000)
    };

    const token = jwt.sign(jwtPayload, 'yangchaoyue');

    res.cookie('cm_token', token, config);

    return res.ok();
  } catch (err) {
    console.error(`user.login: login failed`);
    console.log(err);
    return res.ok(null, 'Login Failed', false);
  }
};
