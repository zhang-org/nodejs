const http = require('http')
const { URL } = require('url')
const fs = require('fs')
const app = http.createServer()
function readStaticfile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  const myurl = new URL(req.url, 'http://localhost:3000/')
  if (myurl.pathname === '/') {
    readStaticfile('./views/index.html').then(result => {
      res.end(result)
    }).catch(error => {
      res.end('请求错误' + error)
    })
  } else if (myurl.pathname === '/list') {
    // readStaticfile('./views/list.html').then(result => {
    //   res.end(result)
    // }).catch(error => {
    //   res.end('请求错误' + error)
    // })
    let fileData = fs.createReadStream('./views/list.html')
    fileData.pipe(res)
  } else {
    // 当请求js文件时，假如没添加这个路由就请求不到
    if (myurl.pathname != '/favicon.ico') {
      let fileData = fs.createReadStream('./views' + myurl.pathname)
      fileData.pipe(res)
    } else {
      res.end(null)
    }
  }
})

app.listen(3000, () => {
  console.log('服务启动成功')
})