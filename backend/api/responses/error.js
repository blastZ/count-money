module.exports = function error(message = null) {
  const { req, res } = this;

  return res.status(500).json({
    message: message || 'Failed',
    success: false
  });
};
