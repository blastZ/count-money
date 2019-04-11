const pre = '/api/v1';
const prefix = (method, route) => `${method} ${pre}${route}`;

module.exports.routes = {
  [prefix('POST', '/user/login')]: 'user.login',
  [prefix('POST', '/user/add')]: 'user.add',
  [prefix('GET', '/bill/list')]: 'bill.list',
  [prefix('POST', '/bill/add')]: 'bill.add'
};
