"use strict";
function greet(name, lang, wish) {
    if (wish === void 0) { wish = "Hello"; }
    if (lang === "en")
        return wish + " " + name;
    else
        return wish + " " + name;
}
greet("angular", "Hola");
var myFilter;
myFilter = function (a) {
    return "";
};
var numbers = [1, 2, 3, 4, 5];
numbers.map(function (e, i) {
    return e * 10;
});
function map(numbers, callBack) {
    var result;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var n = numbers_1[_i];
        result.push(callBack(n));
    }
    return result;
}
map(numbers, function (e) {
    return e + 5;
});
function add(x, y) {
    if (typeof x == "number" && typeof y == "number") {
        return x + y;
    }
    else {
        return x + " + " + y;
    }
}
