module.exports = function bad(message = null) {
  const { req, res } = this;

  return res.badRequest({
    message: message || 'Failed',
    success: false
  });
};
