class GoodDog {
    constructor(name) {
      this._name = name
    };
  
    get speak() {
      return "Wooph!"
    }
  };
  
let sparky = new GoodDog("Sparky");
console.log(sparky.speak);

let fido = new GoodDog("fido");
console.log(fido.speak);