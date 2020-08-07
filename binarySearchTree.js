//二叉搜索树
class BinarySearchTree {
  constructor(key) {
    let root = null;
    this.setRoot = function (node) {
      root = node;
    };
    this.getRoot = function () {
      return root;
    };
  }
  inster(key) {
    let newNode = new Node(key);
    let root = this.getRoot();
    if (root == null) {
      this.setRoot(newNode);
    } else {
      insertNode(root, newNode);
    }
    function insertNode(node, newNode) {
      if (node.key > newNode.key) {
        if (node.left == null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right == null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  }
  search(key) {
    let root = this.getRoot();
    return searchNode(root, key);
    function searchNode(node, key) {
      if (node) {
        if (node.key > key) {
          return searchNode(node.left, key);
        } else if (node.key < key) {
          return searchNode(node.right, key);
        } else {
          return node;
        }
      }
      return false;
    }
  }
  inOrderTraverse(cb) {
    //中序遍历
    let root = this.getRoot();
    inOrderTraverseNode(root, cb);
    function inOrderTraverseNode(node, callback) {
      if (node != null) {
        inOrderTraverseNode(node.left, callback);
        callback(node);
        inOrderTraverseNode(node.right, callback);
      }
    }
  }
  preOrderTraverse() {
    //先序遍历
    let root = this.getRoot();
    inOrderTraverseNode(root, cb);
    function inOrderTraverseNode(node, callback) {
      if (node != null) {
        callback(node);
        inOrderTraverseNode(node.left, callback);
        inOrderTraverseNode(node.right, callback);
      }
    }
  }
  postOrderTraverse() {
    let root = this.getRoot();
    inOrderTraverseNode(root, cb);
    function inOrderTraverseNode(node, callback) {
      if (node != null) {
        inOrderTraverseNode(node.left, callback);
        inOrderTraverseNode(node.right, callback);
        callback(node);
      }
    }
  }
  min() {
    let root = this.getRoot();
    let node = root;

    while (node && node.left) {
      node = node.left;
    }

    return node.key;
  }
  max() {
    let root = this.getRoot();
    let node = root;

    while (node && node.right) {
      node = node.right;
    }

    return node.key;
  }
  remove(key) {
    let node = this.search(key);
    if (node) {
      console.log(node);
      removeNode(node);
    }
    return false;
    function removeNode(node) {
      //没有子节点
      if (node.left == null && node.right == null) {
        node = null;
        console.log("没有子节点", node);

        return node;
      }
      //有一个子节点
      if (node.left == null) {
        node = node.right;
        console.log("有一个子节点", node);

        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      //有2个子节点 找出右边子树最小节点
      let min = node.right;
      while (min && min.left) {
        min = min.left;
      }
      //将最小节点的值赋值到当前节点，即代表删除节点
      node.key = min.key;
      //删除这个接口后还要注意此时有2个节点的值是一样的，还需要删除这个最小节点，而且最小节点的右边可能存在一棵子树的，不能只是赋值null
      if (min.right) {
        min = min.right;
      } else {
        min = null;
      }
    }
  }
}

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinarySearchTree();
tree.inster(11);
tree.inster(14);
tree.inster(2);
tree.inster(4);
tree.inster(7);
tree.inster(9);

console.log(tree.inOrderTraverse((n) => console.log(n.key)));
console.log("min", tree.min());
console.log("max", tree.max());
tree.search(14);
tree.remove(4);
