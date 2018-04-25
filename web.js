// 使用 Express 创建一个静态资源服务器
// 使用 Express 的目的，是为了让自己开发的网站，能够运行在 HTTP 这种协议上
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 托管静态资源的中间件  express.static
app.use(express.static('./view'))
app.use('/semantic', express.static('./semantic'))
app.use('/node_modules', express.static('./node_modules'))
app.use('/assets', express.static('./assets'))

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3000, function() {
  console.log('Express server running at http://127.0.0.1:3000')
})
