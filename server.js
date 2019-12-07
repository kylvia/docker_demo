const koa = require('koa');
const app = new koa();

app.use(async ctx => {
    ctx.body = 'hello docker'
})

app.listen(3000, ()=>{
    console.log("server start on port: 3000");
});
