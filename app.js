const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
const static_ = require('koa-static-router');
const path = require('path');

app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.request.status = 200;
        ctx.response.body = 'home';
    }
    await next()
});
app.use(static_([
    {
        dir: './webapp/myUtils',
        router: '/webapp/myUtils'
    }
]));

let port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}`))
