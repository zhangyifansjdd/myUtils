const koa = require('koa2');
const app = new koa();

// 访问权限
app.use(async (ctx, next) => {
  console.log('权限验证通过...')
  await next() // 执行下一个中间件
})

// 日志记录
app.use(async (ctx, next) => {
  console.log('日志记录完成...')
  await next() // 执行下一个中间件
})

// 响应处理
app.use(async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = 'hi, koa'
  await next()
})

app.listen(3000)