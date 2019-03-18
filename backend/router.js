const Router = require('koa-router');

const router = new Router({
  prefix: '/api/v1'
});

module.exports = app => {
  router.get('/bill', async (ctx, next) => {
    ctx.body = JSON.stringify([
      {
        year: 2019,
        month: 2,
        day: 32,
        data: [
          {
            type: 'expenses',
            category: 'food',
            value: 200
          },
          {
            type: 'income',
            category: 'award',
            value: 3000
          },
          {
            type: 'expenses',
            category: 'car',
            value: 100
          },
          {
            type: 'expenses',
            category: 'game',
            value: 2000
          }
        ]
      }
    ]);
  });

  app.use(router.routes());
  app.use(router.allowedMethods());
};
