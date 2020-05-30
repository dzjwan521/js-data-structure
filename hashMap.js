//hashmap 散列表

class HashMap {
  constructor() {
    this.map = [];
  }
  put(key, val) {
    const index = loselosHashCode(key);
    console.log(index + " - " + key);
    this.map[index] = val;
  }
  remove(key) {
    const index = loselosHashCode(key);
    this.map[index] = undefined;
  }
  get(key) {
    const index = loselosHashCode(key);
    return this.map[index];
  }
}

//lose lose散列函数
function loselosHashCode(key) {
  let hash = 0;
  for (let index = 0; index < key.length; index++) {
    hash += key.charCodeAt(index);
  }
  return hash % 37;
}

var hash = new HashMap();
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");
