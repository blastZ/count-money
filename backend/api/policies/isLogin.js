const jwt = require('jsonwebtoken');

module.exports = async (req, res, proceed) => {
  const token = req.cookies['cm_token'];

  try {
    const decoded = jwt.verify(token, 'yangchaoyue');
    const { user_id: userId, user_name: userName } = decoded;

    if (!userId || !userName) {
      return res.unAutho();
    }

    req.userInfo = {
      userId,
      userName
    };

    return proceed();
  } catch (err) {
    console.error('policies.isLogin: check failed');
    return res.unAutho();
  }
};
