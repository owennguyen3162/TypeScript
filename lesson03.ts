let fst: (a: any, b: any) => any = (a, b) => b;

let fst02: <T, U>(a: T, b: U) => T = (a, b) => a;

let o: { n: number; xs: object[] } = { n: 1, xs: [] };

console.log(fst02("tuan", 12)); // se tra ve tuan

// console.log(o(12, [{ name: "tuan" }])); // sai
