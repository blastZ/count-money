module.exports = function ok(data = null, message = 'Success', success = true) {
  const { req, res } = this;

  const response = {
    message,
    success
  };

  if (data) {
    response.data = data;
  }

  return res.json(response);
};
