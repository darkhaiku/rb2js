class GoodDog {
    constructor(name) {
      this._name = name
    };
  
    get get_name() {
      return this._name
    };
  
    set set_name(name) {
      this._name = name
    };
  
    get speak() {
      return `${this._name} says Whoop!`
    }
};
  
  let sparky = new GoodDog("Sparky");
  console.log(sparky.get_name);
  console.log(sparky.speak);
  console.log("--- --- ---")
  let fido = new GoodDog("Fido")
  console.log(fido.set_name = "Fido")
  // the @name changed ! 
  console.log(fido.speak)
