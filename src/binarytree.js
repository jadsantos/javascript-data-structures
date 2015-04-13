'use strict';

var datastructs = datastructs || {};

datastructs.BinaryTree = function(item) {
    /* 
     * private members
     */
    var item = item;
    var leftChild = null;
    var rightChild = null;
    
    /**
     * left
     * 
     * returns the left child or if a value is passed
     * sets the left child
     */
    var left = function(tree) {
        var result = tree;
        
        if (tree == null) {
            result = leftChild;
        }
        else {
            leftChild = tree;
        }
        
        return result;
    };

    /**
     * right
     * 
     * returns the right child or if a value is passed
     * sets the right child
     */
    var right = function(tree) {
        var result = tree;
        
        if (tree == null) {
            result = rightChild;
        }
        else {
            rightChild = tree;
        }
        
        return result;
    };
    
    /**
     * insert
     * 
     * inserts a child to this tree node
     */
    var insert = function(itemToInsert) {
        if (itemToInsert <= item) {
            if (leftChild == null) {
                var newNode = new datastructs.BinaryTree(itemToInsert);
                leftChild = newNode;
            }
            else {
                leftChild.insert(itemToInsert);
            }
        }
        else {
            if (rightChild == null) {
                var newNode = new datastructs.BinaryTree(itemToInsert);
                rightChild = newNode;
            }
            else {
                rightChild.insert(itemToInsert);
            }
        }
    };
    
    /**
     * visitPreOrder
     * 
     * Performs a pre-order traversal of the binary tree
     */
    var visitPreOrder = function(node, visit) {
        if (node == null) {
            node = self;
        }

        visit(node.item);
        
        if (node.left() != null) {
            visitPreOrder(node.left(), visit);
        }
        
        if (node.right() != null) {
            visitPreOrder(node.right(), visit);
        }
    }
    
    /**
     * toString
     * 
     * a pre-order text representation of the binary tree
     */
    var toString = function() {
        var result = '(';
        
        visitPreOrder(null, function(item) {
            result += item;
            result += ', ';
        });

        result = result.substr(0, result.length - 2);        
        result += ')';
        
        return result;
    };
    
    var self = {
        item: item,
        left: left,
        right: right,
        insert: insert,
        visitPreOrder: visitPreOrder,
        toString: toString
    };
    
    return self;
};