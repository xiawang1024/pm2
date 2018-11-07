const Koa = require('koa')
const app = new Koa()

const log = require('./log')

// app.use(log())

app.use(async ctx => {
  ctx.body = 'hello'
})

const port = 3003
app.listen(port)
console.log(`listening port ${port}`)
