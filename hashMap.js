//hashmap 散列表

class HashMap {
  constructor() {
    this.map = [];
  }
  put(key, val) {}
  remove(key) {}
  get(key) {}
  getHashCode(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash += key.charCodeAt(index);
    }
    return hash % 37;
  }
}
