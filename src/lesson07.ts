const greeter = (fn: (a: string) => void) => {
  fn("helloworld");
};

const printToConsolog = (s: string) => {
  console.log(s);
};

printToConsolog("H");

type GreetFunction = (a: string) => void;

const greeter02 = (fn: GeneratorFunction) => {};

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

const doSomething02 = (fn: DescribableFunction) => {
  console.log(fn.description + "returned " + fn(6));
};

const myFinction = (someArg: number) => someArg > 3;

myFinction.description = "Default description";

doSomething02(myFinction);

type SomeObject = any;

type SomeContructor = {
  new (s: string): SomeObject;
};

// function fn(ctor: SomeContructor) {
//   return new ctor("HI");
// }

interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): string;
}

const frishElement = (arr: any[]) => {
  return arr[0];
};

let arr: string[] = ["hello", "2", "3"];
console.log(frishElement(arr));

function frishElement02<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
const s = frishElement02(["a", "b", "c"]);
const c = frishElement02([1, 2, 3]);
const k = frishElement02([]);
console.log(s);
console.log(c);
console.log(k);

function map<Input, OutPut>(
  arr: Input[],
  func: (arg: Input) => OutPut
): OutPut[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));

console.log(parsed);

type Length = {
  length: number;
};
function longest<Type extends Length>(a: Type, b: Type) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2, 3], [2, 3]);
const longerString = longest("hello", "hellosss");

// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

console.log(longerArray);
console.log(longerString);

// function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
//   return arr1.concat(arr2);
// }
// const arrTest = combine<string | number>([1, 2, 3], ["hello"]);

// console.log(arrTest);

function frishElement001<Type>(arr: Type[]) {
  return arr[0];
}

function frishElement002<Type extends any[]>(arr: Type) {
  return arr[0];
}

const a = frishElement001([1, 2, 3, 4]);
const b = frishElement002([1, 2, 3, 4]);

function greet<Str extends string>(str: Str) {
  console.log(str);
}

console.log(greet("HI"));

function myForEach(arr: any[], callBack: (arg: any, index?: number ) => void){
  for(let i = 0; i < arr.length; i++){
    callBack(arr[i],i);
  }
}

myForEach([1,2,3,5,6],(arg, index) => console.log(arg + "/"+ index));

declare const someRandomString: string;

// function safeParse(s: string): unknown{
//   return JSON.parse(s);
// }

// const obj = safeParse(someRandomString);
// console.log(obj);

// function fail(msg: string): never {
//   throw new Error(msg);
// }

// console.log(fail('ss'));
