import { loadavg, type } from "os";

const obj = { width: 10, height: 15 };
const area = obj.width * obj.height;

let a = 4;

//khoi tao lop
interface User {
  name: string;
  id: number;
}

//khoi tao doi tuong
const user: User = {
  name: "Nguyen Tuan",
  id: 10,
};

//tao class nhu js
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const userAccount: User = new UserAccount("tuan", 20);

//tham so cho ham
const deleteUser = (user: User) => {
  console.log("Delete successfully" + JSON.stringify(user));
};

//ham tra ve gia tri
const getUser = (): User => {
  return {
    name: "tuan",
    id: 1,
  };
};

console.log(userAccount);
console.log(getUser());
console.log(deleteUser(user));

type MyBool = true | false;

const getLength = (obj: string | string[]) => {
  // co the truyen 1 string hoac 1 array<String>
  return obj.length;
};

console.log(`khi truyen 1 String : ${getLength("Hello ca nha")}`);
console.log(`khi truyen 1 Array : ${getLength(["tuan", "Huy", "hai"])}`);

const wrapInArray = (obj: string | string[]) => {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
};

console.log(`khi truyen 1 String : ${wrapInArray("Hello ca nha")}`);
console.log(`khi truyen 1 Array : ${wrapInArray(["tuan", "Huy", "hai"])}`);

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface BackPack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: BackPack<string>; // tuyên bố hằng số backpack có kiểu dữ liệu là String;

// backpack.add("nguyen tuan");
// const object = backpack.get();

interface Point {
  x: number;
  y: number;
}

const logPoint = (p: Point) => {
  console.log(`${p.x}, ${p.y}`);
};

const point = {
  x: 12,
  y: 10,
};

console.log(point.x, point.y);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

// const color = { hex: "#187ABF" };
// logPoint(color); // sai boi vi k khop voi lop point x: number => != hex : string

class VirtualPoint {
  y: number;
  x: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(1, 2);
logPoint(newVPoint);
