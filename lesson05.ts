const printName = (obj: { first: string; last?: string }) => {
  console.log(obj.last?.toLocaleUpperCase());
};

//Union Types

const printId = (id: number | string) => {
  console.log(id);
};

printId("1");
printId(1);
// printId({ hello: 1 }) // error boi vi chi chap nhan input la string hoac number

const welcomePeople = (x: string[] | string) => {
  return Array.isArray(x)
    ? console.log(`a is array ${x.join(" hello ")}`)
    : console.log("a not is array");
};
welcomePeople(["a", "b", "c"]);
welcomePeople("a");

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
console.log(getFirstThree("hello ca nha iu"));
console.log(getFirstThree([2, 2, 4, 5])); // dung duoc boi vi slice co the dung duoc cho ca mang

//Type Aliases
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//Differences Between Type Aliases and Interfaces

//BOTH
interface aminal {
  name: string;
}

interface Bear extends aminal {
  honey: boolean;
}

const getBear = (bear: Bear) => {
  console.log(`${bear.name}, ${bear.honey}`);
};

type Animal02 = {
  name: string;
};

type Bear02 = Animal02 & {
  honey: boolean;
};

const getBear02 = (bear: Bear02) => {
  console.log(`${bear.name}, ${bear.honey}`);
};

//DIFFERENCE
//interface co the them truong moi vao interface hien co

interface Window3 {
  title: string;
}

interface Window3 {
  ts: number;
}

const windowTest = (win: Window3) => {
  console.log(`${win.ts}, ${win.title}`);
};

type Window2 = {
  title: string;
};

// type Window2 = {
//     ts: number; error duplicate Window2
// }

type hello = string;

function hello2(hi: hello) {
  console.log(hi);
}

// interface x extends string {

// }  => error

let changingString = "Hello word";
changingString = "Ola Mundo";
//boi vi changingString no dai dai dien cho bat ki chuoi nao nen khi di chuot vao changing.. no se suy luan la kieu string

const constantString = "Hello word";
constantString;

let x: "Hello" = "Hello";

x = "Hello"; //=> dung vi khop voi type Hello

// x= "cc" // error

const printText = (x: string, alignment: "left" | "right") => {
  console.log(x, alignment);
};

printText("chuoi ki tu", "left");
// printText('chuoi ki tu',"hi") => error vi k khop voi kieu left or right

const conpare = (a: string, b: string): -1 | 0 | 1 => {
  return a === b ? 0 : a > b ? 1 : -1;
};

console.log(conpare("5", "6"));

interface Options {
  width: number;
}

const configure = (x: Options | "auto") => {
  console.log(x);
};

configure({ width: 30 });
configure("auto");
// configure("error");

// declare function handleRequest(url: string, method: "GET" | "POST"): void;

// const req = { url: "https://example.com", method: "POST" };

// handleRequest(req.url, req.method as "POST");
function doSomething(x: string | null) {
  if (x === null) {
    console.log("Hello, " + "NUll");
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

doSomething(null);

function liveDangerously(x?: number | null) {
  // No error
  return x ? console.log(x!.toFixed()) : console.log("k co gia tri truyen vao"); //x! la k chap nhan gia tri null
}

liveDangerously(null);
