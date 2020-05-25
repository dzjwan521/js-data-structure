//链表
function LinkedList() {
  function Node(element) {
    this.element = element;
    this.next = null;
  }
  let length = 0;
  let head = null;
  this.append = function (element) {
    let node = new Node(element);
    let last = null;
    if (head === null) {
      head = node;
    } else {
      last = head;
      while (last.next) {
        last = last.next;
      }
      last.next = node;
    }
    length++;
  };
  this.insert = function (position, element) {
    if (position >= 0 && position < length) {
      let node = new Node(element);
      let current = head;
      let next, prev;

      if (position == 0) {
        node.next = head;
        head = node;
      } else {
        while (position-- > 0) {
          prev = current;
          current = current.next;
          next = current.next;
        }
        prev.next = node;
        node.next = current;
      }
      length++;
    } else {
      return false;
    }
  };
  this.removeAt = function (position) {
    if (position >= 0 && position < length) {
      if (position == 0) {
        head = head.next;
      } else {
        let current = head;
        let next, prev;
        while (position-- > 0) {
          prev = current;
          current = current.next;
          next = current.next;
        }
        prev.next = next;
      }
      length--;
    } else {
      return false;
    }
  };
  this.remove = function (element) {
    let current = head;
    let next = current.next;
    if (head.element === element) {
      head = next;
      return 0;
    }
    for (var i = 1; i < length; i++) {
      current = current.next;
      next = current.next;
      if (next.element === element) {
        current.next = next.next;
        return i;
      } else {
        return false;
      }
    }
  };
  this.indexOf = function (element) {
    let current = head;
    if (head.element === element) {
      head = next;
      return 0;
    }

    for (var i = 1; i < length; i++) {
      current = current.next;
      if (current.element === element) {
        return i;
      }
    }
    return false;
  };
  this.isEmpty = function () {
    return Boolean(length);
  };
  this.size = function () {
    return length;
  };
  this.getHead = function () {
    return head;
  };
  this.toString = function () {
    let str = "";
    let current = head;
    while (current) {
      str += current.element;
      current = current.next;
    }
  };
  this.print = function () {
    let current = head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  };
}

let list = new LinkedList();
list.append("a");
list.append("b");
list.append("d");
list.append("e");
list.insert(2, "c");
list.insert(2, "c");
list.removeAt(2);
list.remove("e");
console.log(list.indexOf("c"));

list.print();

//双向链表
function DoublyLinkedList() {
  let length = 0;
  let head = null;
  let tail = null;
  function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
  this.append = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      node.prev = tail;
      tail.next = node;
      tail = node;
    }
    length++;
  };
  this.insert = function (position, element) {
    if (!head) {
      return false;
    }
    if (position > -1 && position <= length) {
      let node = new Node(element);
      if (position === 0) {
        head.prev = node;
        node.next = head;
        head = node;
      } else if (position === length) {
        tail.prev = node;
        node.next = tail;
        tail = node;
      } else {
      }
    } else {
      return false;
    }
  };
  this.isEmpty = function () {
    return length === 0;
  };
  this.size = function () {
    return length;
  };
  this.getHead = function () {
    return head;
  };
  this.toString = function () {
    let str = "";
    let current = head;
    while (current) {
      str += current.element;
      current = current.next;
    }
  };
  this.print = function () {
    let current = head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  };
}

//循环链表最后一项的next不是null  而是head
