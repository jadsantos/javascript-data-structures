describe('Tree', function() {
    var tree;
    
    beforeEach(function() {
        tree = new datastructs.Tree('0');
    });
    
    it('should start with no children', function() {
        expect(tree.hasChildren()).toEqual(false);
    });
    
    it('should have children after one insert', function() {
        tree.insertChild('1');
        expect(tree.hasChildren()).toEqual(true);
    });
    
    it('should return correct size', function() {
        var level = tree.insertChild('1');
        level.insertChild('1.1');
        level.insertChild('1.2');
        level.insertChild('1.3');
        level = tree.insertChild('2');
        level.insertChild('2.1');
        level.insertChild('2.2');
        level.insertChild('2.3');
        level = tree.insertChild('3');
        level.insertChild('3.1');
        level.insertChild('3.2');
        level.insertChild('3.3');
        expect(tree.size()).toEqual(13);    
    });
    
    it('should output one child', function() {
        tree.insertChild('1');
        expect(tree.toString()).toEqual('(0 (1))');
    });
    
    it('should output two children', function() {
        tree.insertChild('1');
        tree.insertChild('2');
        expect(tree.toString()).toEqual('(0 (1, 2))');
    });
    
    it('should output two levels pre-order variant 1', function() {
        var levelOne = tree.insertChild('1');
        levelOne.insertChild('1.1');
        tree.insertChild('2');
        expect(tree.toString()).toEqual('(0 (1 (1.1), 2))');
    });
    
    it('should output two levels pre-order variant 2', function() {
        var levelOne = tree.insertChild('1');
        levelOne.insertChild('1.1');
        levelOne = tree.insertChild('2');
        levelOne.insertChild('2.1');
        expect(tree.toString()).toEqual('(0 (1 (1.1), 2 (2.1)))');
    });
    
    it('should output three levels pre-order', function() {
        var levelOne = tree.insertChild('1');
        var levelTwo = levelOne.insertChild('1.1');
        levelTwo.insertChild('1.1.1');
        expect(tree.toString()).toEqual('(0 (1 (1.1 (1.1.1))))');
    });

    it('should output one level bfs', function() {
       tree.insertChild('1');
       tree.insertChild('2');
       tree.insertChild('3');
       expect(tree.toStringBfs()).toEqual('(0, 1, 2, 3)');
    });

    it('should output two level bfs', function() {
       var level = tree.insertChild('1');
       level.insertChild('1.1');
       level.insertChild('1.2');
       level.insertChild('1.3');
       level = tree.insertChild('2');
       level.insertChild('2.1');
       level.insertChild('2.2');
       level.insertChild('2.3');
       level = tree.insertChild('3');
       level.insertChild('3.1');
       level.insertChild('3.2');
       level.insertChild('3.3');
       expect(tree.toStringBfs()).toEqual('(0, 1, 2, 3, 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3)');
    });
    
    it('should output one level post-order', function() {
       tree.insertChild('1');
       tree.insertChild('2');
       tree.insertChild('3');
       expect(tree.toStringPostOrder()).toEqual('(1, 2, 3, 0)');
    });

    it('should output two level post-order', function() {
       var level = tree.insertChild('1');
       level.insertChild('1.1');
       level.insertChild('1.2');
       level.insertChild('1.3');
       level = tree.insertChild('2');
       level.insertChild('2.1');
       level.insertChild('2.2');
       level.insertChild('2.3');
       level = tree.insertChild('3');
       level.insertChild('3.1');
       level.insertChild('3.2');
       level.insertChild('3.3');
       expect(tree.toStringPostOrder()).toEqual('(1.1, 1.2, 1.3, 1, 2.1, 2.2, 2.3, 2, 3.1, 3.2, 3.3, 3, 0)');
    });
    
});