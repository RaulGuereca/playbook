class Pokemon {
    constructor(name){
      // Al crear este objeto se guardarán estos valores
      this.name = name
    }
  
    sayHello (message) {
        console.log("Mi pokemon " + this.name + " te saluda!!!")
      }

    sayMessage (message) {
        console.log("Mi pokemon " + this.name + " dice: Heey!")
      }
  }

  module.exports = Pokemon