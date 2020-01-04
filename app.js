const koa = require('koa');
const app = new koa();
const fs = require('fs');
const path = require('path');
const koaRouter = require('koa-router')();
const koaStatic = require('koa-static');
const koaStaticRouter = require('koa-static-router');

app.use(async (ctx, next) => {
  if (ctx.request.path === '/') {
    ctx.response.status = 200;
    ctx.response.body = 'Hello Koa!!!';
  }

  await next();
});

app.use(async (ctx, next) => {
  if (ctx.request.path.startsWith('/mobileView')) {
    ctx.response.status = 302;
    let targetUrl = ctx.request.path.replace('/mobileView', '/website/automatic');
    let query = ctx.request.query;
    if (query && Object.keys(query).length > 0) {
      targetUrl += '?';
      for (let key in query) {
        let value = query[key];
        console.log(`${key}=${value}&`);
        targetUrl += `${key}=${value}&`;
      }
      targetUrl = targetUrl.substr(0,targetUrl.length-1);
    }
    console.log('targetUrl:' + targetUrl);
    ctx.redirect(targetUrl);
  }

  await next();
});

app.use(koaStatic('./dist/'));

let port = process.env.PORT;
// if (!port) {
//   port = 3001;
// }
app.listen(port, () => console.log(`Server started on port ${port}`))
