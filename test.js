var path = require('path') 
var httpServer = require('http-server')
var server = httpServer.createServer({
  root: path.resolve(__dirname, '../../')
})

server.listen(8080)

// delete some lines 
// 123
