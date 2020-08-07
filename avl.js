//自平衡树
// “AVL树是一种自平衡二叉搜索树，意思是任何一个节点左右两侧子树的高度之差最多为1。也就是说这种树会在添加或移除节点时尽量试着成为一棵完全树。”
class Avl {
  constructor() {
    let root = null;
    this.getRoot = function () {
      return root;
    };
    this.setRoot = function (node) {
      root = node;
    };
  }
  inster(key) {
    let root = this.getRoot();
    inster(root, key);
    function inster(node, key) {
      if (node == null) {
        node = new Node(key);
      } else if (node.key > key) {
        node.left = inster(node.left, key);
        if (node.left) {
        }
      } else if (node.key < key) {
        node.right = inster(node.right, key);
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
