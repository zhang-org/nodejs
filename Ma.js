console.log('Ma module')
let a = 20
class Person {
  constructor() {
    this.name = '张三'
  }

  hobby() {
    console.log(this.name)
  }
}
module.exports = {
  Person,
  a
}