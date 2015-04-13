Javascript Data Structures
=====================

These set of classes are Javascript implementations of common data structures. They were built as an exercise to improve proficiency in Javascript class writing, Jasmine unit testing, and to refresh comprehension in data structures. These classes are subject to constant change as they are the output of self-study. 

----------

Class List
-------------
- **LinkedList** - a singly-linked list
  - get(index): gets the item at the given index
  - remove(index): removes the item at the given index
  - insert(item, index): inserts the item at the given index
  - toString(): returns a text representation of the list
  - length(): returns the number of items in the list
- **Tree** - a k-ary tree
  - insertChild(tree): inserts a new child to this tree
  - child(index): returns the child at the given index
  - hasChildren(): returns the number of children of this tree
  - numChildren(): the number of children of this tree
  - size(): the total number of nodes in the tree inclusive
  - visitPreOrder(callback, index, length): performs a pre-order traversal of the tree
  - visitBfs(callback): performs a breadth-first traversal of the tree
  - visitPostOrder(node, callback): performs a post-order traversal of the tree
  - toString(): returns a pre-order representation of the tree
  - toStringBfs(): returns a breadth-first representation of the tree
  - toStringPostOrder(): returns a post-order representation of the  tree
- **BinaryTree** - a binary tree
  - left(BinaryTree): returns the left child of the tree or assigns the given tree to the left child
  - right(BinaryTree): returns the right child of the tree or assigns the given tree to the right child
  - insert(item): inserts the item to the appropriate node in the binary tree
  - visitPreOrder(node, callback): performs a pre-orer traversal of the binary tree
  - toString(): returns a pre-order representation of the binary tree