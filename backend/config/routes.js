const pre = '/api/v1';
const prefix = (method, route) => `${method} ${pre}${route}`;

module.exports.routes = {
  [prefix('GET', '/user/login')]: 'user.login'
};
