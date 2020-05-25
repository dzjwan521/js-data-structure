//dictionary 字典

class Dictionary {
  constructor() {
    this.items = {};
  }
  set(key, value) {
    if (!this.has(key)) {
      this.items[key] = value;
      return true;
    }
  }
  get(key) {
    return this.items[key];
  }
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
  }
  has(key) {
    return this.items.hasOwnProperty(key);
  }
  clear() {
    this.items = {};
  }
  keys() {
    return Object.keys(this.items);
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    let ret = [];
    Object.keys(this.items).forEach((key) => {
      ret.push(this.items[key]);
    });
    return ret;
  }
  getItems() {
    return this.items;
  }
}

var dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com");

console.log(dictionary.has("Gandalf"));
