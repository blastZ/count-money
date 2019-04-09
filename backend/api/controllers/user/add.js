const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  const { key, name, password } = req.body;
  if (
    !key ||
    typeof key !== 'string' ||
    key.trim() === '' ||
    !name ||
    !password ||
    typeof name !== 'string' ||
    typeof password !== 'string' ||
    name.trim() === '' ||
    password.trim() === '' ||
    password.trim().length < 6
  ) {
    return res.bad('Bad Params');
  }

  try {
    if (key === 'yangchaoyue') {
      const exist = (await User.find({
        name,
        deleted: false
      }))[0];

      if (exist) return res.bad('User Exist');

      const encryptedPassword = await bcrypt.hash(password.trim(), 10);
      await User.create({
        name: name.trim(),
        password: encryptedPassword,
        deleted: false
      });

      return res.ok();
    }

    return res.bad('UnAuthorization');
  } catch (err) {
    console.error('user.add: add user failed');
    console.log(err);
    return res.ok(null, 'Add User Failed', false);
  }
};
