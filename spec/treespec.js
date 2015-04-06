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
    
    it('should output one child', function() {
        tree.insertChild('1');
        expect(tree.toString()).toEqual('(0 (1))');
    });
    
    it('should output two children', function() {
        tree.insertChild('1');
        tree.insertChild('2');
        expect(tree.toString()).toEqual('(0 (1, 2))');
    });
    
    it('should output two levels variant 1', function() {
        var levelOne = tree.insertChild('1');
        levelOne.insertChild('1.1');
        tree.insertChild('2');
        expect(tree.toString()).toEqual('(0 (1 (1.1), 2))');
    });
    
    it('should output two levels variant 2', function() {
        var levelOne = tree.insertChild('1');
        levelOne.insertChild('1.1');
        levelOne = tree.insertChild('2');
        levelOne.insertChild('2.1');
        expect(tree.toString()).toEqual('(0 (1 (1.1), 2 (2.1)))');
    });
    
    it('should output three levels variant 1', function() {
        var levelOne = tree.insertChild('1');
        var levelTwo = levelOne.insertChild('1.1');
        levelTwo.insertChild('1.1.1');
        expect(tree.toString()).toEqual('(0 (1 (1.1 (1.1.1))))');
    });

});