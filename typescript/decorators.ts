// console.log("dec");

// function readonly<TFunction extends Function>(Target: TFunction): TFunction {
//   let newConstructor = function() {
//     Target.apply(this);
//     Object.freeze(this);
//   };

//   newConstructor.prototype = Object.create(Target.prototype);
//   newConstructor.prototype.constructor = Target;

//   return <any>newConstructor;
// }

// function enumerable(value: boolean) {
//   return function(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     descriptor.enumerable = value;
//   };
// }

// @readonly
// class Person {
//   private _name: string;
//   private _isAdmin: boolean;

//   constructor(name: string, admin: boolean) {
//     this._name = name;
//     this._isAdmin = admin;
//   }

//   @enumerable(false)
//   get name() {
//     return this.name;
//   }
// }

function readonly(target: Function) {
  let newConstructor = function() {
    console.log(this);
    target.apply(this);
    Object.freeze(this);
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;

  return <any>newConstructor;
}

@readonly
class Person {}

let p1 = new Person();

console.log(p1);
