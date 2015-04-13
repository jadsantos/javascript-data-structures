'use strict';

describe('Binary Tree', function() {
    var tree;
    
    beforeEach(function() {
        tree = new datastructs.BinaryTree(5);
    });
    
    it('inserts lesser child into left and greater child into right', function() {
        tree.insert(0);
        tree.insert(9);
        expect(tree.toString()).toEqual('(5, 0, 9)');
    });
    
    it('inserts two lesser children into left and greater child into right', function() {
        tree.insert(4);
        tree.insert(9);
        tree.insert(3);
        expect(tree.toString()).toEqual('(5, 4, 3, 9)');
    });
    
    it('inserts three lesser children into left and greater child into right', function() {
        tree.insert(3);
        tree.insert(9);
        tree.insert(2);
        tree.insert(4);
        expect(tree.toString()).toEqual('(5, 3, 2, 4, 9)');
    });
    
    it('inserts three lesser children into left and two greater children into right', function() {
        tree.insert(3);
        tree.insert(6);
        tree.insert(2);
        tree.insert(4);
        tree.insert(7);
        expect(tree.toString()).toEqual('(5, 3, 2, 4, 6, 7)');
    });
});