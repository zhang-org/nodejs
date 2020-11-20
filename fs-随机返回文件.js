const fs = require('fs')
new Promise((resolve, reject) => {
  fs.readdir('./node_modules', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
}).then(result => {
  // console.log(num)
  for (let i = 0; i < 100; i++) {
    let num = Math.floor(Math.random() * result.length)
    console.log(result[num])
  }
  // for (let v of result) {
  //   console.log(v)
  // }
}).catch(err => console.log(err))