module.exports = function unAutho(message = null) {
  const { req, res } = this;

  return res.status(401).json({
    message: message || 'UnAutho',
    success: false
  });
};
