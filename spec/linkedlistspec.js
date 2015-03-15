describe('LinkedList', function() {
    var list;
    
    beforeEach(function() {
        list = new datastructs.LinkedList();
    });
    
    it('should insert an element into an empty list', function() {
        list.insert('1', 0);
        expect(list.length()).toEqual(1);
        expect(list.toString()).toEqual('[1]');
    });
    
    it('should insert at head of non-empty list', function() {
        list.insert('1', 0);
        list.insert('2', 0);
        expect(list.length()).toEqual(2);
        expect(list.toString()).toEqual('[2,1]')
    });
    
    it('should insert between existing nodes', function() {
        list.insert('1', 0);
        list.insert('2', 0);
        list.insert('3', 1);
        expect(list.length()).toEqual(3);
        expect(list.toString()).toEqual('[2,3,1]');
    });
    
    it('should insert at the end of a non-empty list', function() {
        list.insert('1', 0);
        list.insert('2', 1);
        expect(list.length()).toEqual(2);
        expect(list.toString()).toEqual('[1,2]');
    });
    
    it('should remove an element from a specific position', function() {
        list.insert('1', 0);
        list.remove(0);
        expect(list.length()).toEqual(0);
        expect(list.toString()).toEqual('[]');
    });
    
    it('should remove an element in between two items', function() {
        list.insert('1', 0);
        list.insert('2', 0);
        list.insert('3', 0);
        list.remove(1);
        expect(list.length()).toEqual(2);
        expect(list.toString()).toEqual('[3,1]');
    });
    
    it('should remove an element at the end', function() {
        list.insert('1', 0);
        list.insert('2', 0);
        list.insert('3', 0);
        list.remove(2);
        expect(list.length()).toEqual(2);
        expect(list.toString()).toEqual('[3,2]');
    });

    it('#should throw out of bounds exception with negative index', function() {
        expect(function() {
            list.insert('1', -1);
        }).toThrowError('Out of bounds');
    });
    
    it('#should throw out of bounds exception with index greater than length', function() {
        expect(function() {
            list.insert('1', 1);
        }).toThrowError('Out of bounds');
    });
});