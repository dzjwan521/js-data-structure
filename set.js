//集合

class Set {
  constructor() {
    this.items = {};
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
  }
  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
  }
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    let arr = [];
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        const element = this.items[key];
        arr.push(element);
      }
    }
    return arr;
  }
  union(val2) {
    let unionSet = new Set();
    let val = this.values();
    val.forEach((i) => {
      unionSet.add(i);
    });
    val2.values().forEach((i) => {
      unionSet.add(i);
    });
    return unionSet;
  }
  intersection(val2) {
    let unionSet = new Set();
    let val = this.values();
    let other = val2.values();
    val.forEach((i) => {
      if (this.has(i) && val2.has(i)) {
        unionSet.add(i);
      }
    });

    return unionSet;
  }
  //差集
  //判断子集
}
const set = new Set();

set.add(1);
console.log(set.values()); //输出["1"]
console.log(set.has(1)); //输出true
console.log(set.size()); //输出1

set.add(2);
console.log(set.values()); //输出["1", "2"]
console.log(set.has(2)); //true
console.log(set.size()); //2

set.delete(1);
console.log(set.values()); //输出["2"]

set.delete(2);
console.log(set.values()); //输出[]”

//并集
let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
console.log(unionAB.values());

//交集

let intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());
