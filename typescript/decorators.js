"use strict";
// console.log("dec");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function readonly(target) {
    var newConstructor = function () {
        console.log(this);
        target.apply(this);
        Object.freeze(this);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        readonly
    ], Person);
    return Person;
}());
var p1 = new Person();
console.log(p1);
