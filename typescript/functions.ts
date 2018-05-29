function greet(name: string, lang?: string, wish = "Hello"): string {
  if (lang === "en") return `${wish} ${name}`;
  else return `${wish} ${name}`;
}

greet("angular", "Hola");

type filter = (searchParam: string) => string;

let myFilter: filter;

myFilter = function(a: string) {
  return "";
};

let numbers = [1, 2, 3, 4, 5];
numbers.map((e, i) => {
  return e * 10;
});

function map(numbers: Array<number>, callBack: (e: number) => number) {
  let result: Array<number>;
  for (let n of numbers) {
    result.push(callBack(n));
  }
  return result;
}

map(numbers, function(e: number) {
  return e + 5;
});

function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: number | string, y: number | string): number | string {
  if (typeof x == "number" && typeof y == "number") {
    return x + y;
  } else {
    return `${x} + ${y}`;
  }
}
