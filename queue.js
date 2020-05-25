//队列  先进先出
function Queue() {
  let items = [];
  this.enqueue = function (ele) {
    items.push(ele);
  };
  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.size = function () {
    return items.length;
  };
}

//优先列队 与列队的一点不同就是 会根据优先级插入
function PriorityQueue() {
  let items = [];
  function Obj(ele, priority) {
    this.ele = ele;
    this.priority = priority;
  }
  this.enqueue = function (ele, priority) {
    let obj = new Obj(ele, priority);
    let added = false;
    for (let i = 0; i < items.length; i++) {
      if (obj.priority < items[i]) {
        added = true;
        items.splice(i, 0, obj);
      }
    }
    if (!added) {
      items.push(obj);
    }
  };
  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.size = function () {
    return items.length;
  };
  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].ele} - ${items[i].priority}`);
    }
  };
}
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();
console.log(priorityQueue.size());
