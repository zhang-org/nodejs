const fs = require('fs')
const { resolve } = require('path')
// 写入
// new Promise((resolve, reject) => {
//   fs.writeFile('1.txt', '我是写入的文字11111\n', (err) => {
//     if (err) {
//       reject(err)
//     } else {
//       resolve('写入成功')
//     }
//   })
// }).then(result => {
//   console.log(result)
//   return new Promise((resolve, reject) => {
//     fs.writeFile('1.txt', '我是写入的文字2222', { flag: "a" }, (err) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve('写入成功')
//       }
//     })
//   })
// }, err => {
//   console.log(err)
// })
//   .then(result => {
//     console.log(result)
//   }, err => {
//     console.log(err)
//   })

// 读取
// fs.readFile('1.txt', (err, data) => {
//   if (err) {
//     throw err
//   } else {
//     console.log(data.toString())
//   }
// })

// let data = fs.readFileSync('1.txt','utf8')
// console.log(data)

// 重命名
// fs.rename('1.txt', '2.txt', err => {
//   if (err) throw err
// })

// 删除
// fs.unlink('2.txt', err => {
//   if (err) throw err
// })

// 复制
// fs.copyFile('index.js', 'myindex.js', err => {
//   if (err) throw err
//   else console.log('复制成功')
// })


// 自定义复制
function mycopy(src, dest) {
  new Promise((resolve, reject) => {
    fs.readFile(src, (err, data) => {
      if (err) throw err
      else resolve(data.toString())
    })
  }).then(result => {
    return new Promise((resolve, reject) => {
      fs.writeFile(dest, result, err => {
        if (err) throw err
        else resolve('复制成功')
      })
    })
  }).then(result => {
    console.log(result)
  })
}

mycopy('./index.js', './myindex.js')