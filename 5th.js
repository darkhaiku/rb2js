class GoodDog {
    get name() {
      return this._name
    };
  
    set name(name) {
      this._name = name
    };
  
    get height() {
      return this._height
    };
  
    set height(height) {
      this._height = height
    };
  
    get weight() {
      return this._weight
    };
  
    set weight(weight) {
      this._weight = weight
    };
  
    constructor(n, h, w) {
      this._name = n;
      this._height = h;
      this._weight = w
    };
  
    get speak() {
      return `${this._name} says its ${this._height} and ${this._weight}!`
    };
  
    change_speak_info(n, h, w) {
      this._name = n;
      this._height = h;
      this._weight = w
    }
  };
  
  let sparky = new GoodDog("Sparky", "1.50", "20kg");
  console.log(sparky.speak)
  console.log('--- changed informations ---')
  sparky.change_speak_info('Sparky', '2.83', '60kg')
  console.log(sparky.speak)