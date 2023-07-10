const owenNguyen = {
  name: "Nguyen Tuan",
  age: 18,
  hobbies: ["nau an", "da bong", "Danh cau", 2],
  role: [1, "s"],
};

for (const index of owenNguyen.hobbies) {
  console.log(index);
}

//Union Types
function combine(
  number1: number | string,
  number2: number | string
): number | string {
  let value;
  if (typeof number1 === "number" && typeof number2 === "number") {
    value = number1 + number2;
    console.log(value);
  } else {
    value = number1.toString() + number2.toString();
    console.log(value);
  }
  return value;
}

combine(1, 2);

combine("HI", "Ha");

//custom type

type customType = string | number;

function custom(name: customType): void {
  console.log(name);
}
custom("HI");

//funtion as type

let convertFun: (name: customType) => void;
convertFun = custom;
// convertFun = combine -> error vi convertFun k trung kieu de gan duoc
console.log(convertFun("HI convertFun"));

// unknown TYpe

let unknown: unknown;
unknown = "s"
unknown = 3;

let anyType: any;
anyType = "Ssss"
anyType.length

// unknown.length error plesea check type of unknown
if(typeof unknown === "string"){
  unknown.length
}
