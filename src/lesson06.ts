const padLeft = (padding: number | string, input: string): string => {
  if (typeof padding === "number") {
    return "".repeat(padding) + input;
  }
  return padding + input;
};

// const printAll = (strs: string | string[] | null) => {
//   if (typeof strs === "object") {
//     for (const s of strs) {  => error strs vi null cung la kieu object
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// };

const getUserONLineMessage = (numberUserOnline: number) => {
  if (numberUserOnline) {
    return `There are ${numberUserOnline} online now`;
  }
  return "Nobody's here. :(";
};

console.log(getUserONLineMessage(3));

const printAll = (strs: string | string[] | null) => {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    console.log("bad");
  }
};

printAll("hi");

function printAll02(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
printAll02(null);

const multiyAll = (
  values: number[] | undefined,
  factor: number
): number[] | undefined => {
  if (!values) {
    return values;
  } else {
    values.map((x) => x * factor);
  }
};

let values;
console.log(multiyAll(values, 4));

type Fish = { swim: () => void; name: string };
type Bird = { fly: () => void; name: string };

const move = (animal: Fish | Bird) => {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
};

const fish: Fish = {
  swim() {
    console.log("Swimming");
  },
  name: "hi",
};

const bird: Bird = {
  fly() {
    console.log("Flying");
  },
  name: "sharkey",
};

move(fish);
move(bird);

const logValue = (x: Date | string) => {
  if (x instanceof Date) {
    // check xem x co phai thuc the cua date khong
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
};

logValue(new Date());
logValue("hi");

function getSmaillPet(): Bird | Fish {
  return fish;
}

const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

let pet = getSmaillPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmaillPet(), getSmaillPet(), getSmaillPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});

// console.log(underWater1);
// console.log(underWater2);
console.log(underWater3);

interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

const getArea = (shape: Shape) => {
  return Math.PI * shape.radius! ** 2; // ! nghia la chan chan thang radius k bi undefined
};

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape01 = Circle | Square;

const getArea02 = (shape: Shape01) => {
  return shape.kind === "circle"
    ? Math.PI * shape.radius ** 2
    : console.log("Square");
};

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape02 = Circle | Square | Triangle;
 
function getArea03(shape: Shape02) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
      case "triangle":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}