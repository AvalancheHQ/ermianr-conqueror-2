import { bench, describe } from "vitest";

describe("String operations", () => {
  bench("String concatenation", () => {
    let result = "";
    for (let i = 0; i < 100; i++) {
      result += "test";
    }
    return result;
  });

  bench("Array join", () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push("test");
    }
    return arr.join("");
  });
});

describe("Array operations", () => {
  bench("Array map", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i);
    return arr.map((x) => x * 2);
  });

  bench("Array forEach", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i);
    const result: number[] = [];
    for (const x of arr) {
      result.push(x * 2);
    }
    return result;
  });
});

describe("Object operations", () => {
  bench("Object.keys iteration", () => {
    const obj = Object.fromEntries(
      Array.from({ length: 100 }, (_, i) => [`key${i}`, i]),
    );
    const result = [];
    for (const key of Object.keys(obj)) {
      result.push(obj[key]);
    }
    return result;
  });

  bench("Object.entries iteration", () => {
    const obj = Object.fromEntries(
      Array.from({ length: 100 }, (_, i) => [`key${i}`, i]),
    );
    const result = [];
    for (const [_key, value] of Object.entries(obj)) {
      result.push(value);
    }
    return result;
  });
});
