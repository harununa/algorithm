// 전위 순회

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(node) {
        this.root = node;
    }
    preorder(node) {
        console.log(node.value);
        if (node.left) {
            this.preorder(node.left)
        }
        if (node.right) {
            this.preorder(node.right)
        }
    }

}

const tree = new Tree(new Node(1));
tree.root.left = new Node(2);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right = new Node(3);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);
tree.root.right.right.left = new Node(8);
tree.root.right.right.right = new Node(9);

tree.preorder(tree.root)