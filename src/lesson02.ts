interface Pointlike {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

const logPoint = (point: Pointlike) => {
  console.log(`x = ${point.x}, y = ${point.y}`);
};

const logName = (x: Named) => {
  console.log(`Hello, ` + x.name);
};

const obj = {
  x: 0,
  y: 0,
  name: "Origin",
};

logPoint(obj); //có thể sử dụng obj thay cho PointLike bơi vì nó có chung thuộc tính x và y cùng là số => phải cùng tên thuộc tính
logName(obj);

class Empty {}

const fn = (arg: Empty) => {};

fn({ k: 10 });


class Car{
    drive(){

    }
}
class Golfer{
    drive(){

    }
}
let w: Car = new Golfer();
