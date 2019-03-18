const Koa = require('koa');

const router = require('./router');

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    ctx.ok(err.data || null, err.message || '执行失败', false);
  }
});

app.use(async (ctx, next) => {
  await next();
  const allowedOrigin = ['http://127.0.0.1:3000'];
  const origin = ctx.request.headers.origin;
  if (allowedOrigin.indexOf(origin) > -1) {
    ctx.set('Access-Control-Allow-Origin', origin);
  }
  ctx.set('Access-Control-Allow-Methods', 'GET, POST');
  ctx.set('Access-Control-Allow-Headers', 'origin, content-type, method');
});

router(app);

app.listen(3001, () => {
  console.log('App is listening at 3001');
});
