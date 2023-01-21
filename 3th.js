class GoodDog {
    constructor(name) {
      this._name = name
    };
  
    get get_name() {
      return this._name
    };
  
    get speak() {
      return `${this._name} says Whoop!`
    }
};
  
  let sparky = new GoodDog("Sparky");
  console.log(sparky.get_name);
  console.log(sparky.speak);