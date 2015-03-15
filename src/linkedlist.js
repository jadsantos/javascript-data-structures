'use strict';

var datastructs = datastructs || {};

datastructs.LinkedList = (function() {
    //
    // the interface is what will be returned to the client.
    // it will be built up in the lines below.
    //
    var ifc = function() {};

    /**
     * Internal Node class representing a node in the list
     */
    var Node = function(theItem) {
        return {
            item: theItem,
            next: null
        };    
    };
        
    /*
     * Internal private members 
     * Keep track of len instead of relying on dynamically counting
     */
    var head = null;
    var len = 0;

    //
    // the prototype is where all of the properties and methods will exist
    //
    ifc.prototype = {
        /**
         * length
         * 
         * Returns the number of items in the list
         */
        length: function() {
            return len;    
        },
    
        /**
         * insert
         * 
         * adds an item at the given position.
         * returns the new node that was inserted
         * throws OutOfBounds exception if position is negative or exceeds the 
         * length of the list.
         */
        insert: function(item, atIndex) {
            if (atIndex < 0 || atIndex > len) {
                throw "OutOfBoundsException: index " + atIndex + " is not within 0 and " + len;
            }
            
            len++;
            var newNode = new Node(item);
            
            if (atIndex === 0) {
                //
                // this special case is for adding at the front of the list
                // special since we have to update the head pointer
                //
                newNode.next = head;
                head = newNode;
            }
            else {
                //
                // find the node right before the position at which the new 
                // node is to be inserted
                //
                var indexNode = head;
                var beforeIndex = atIndex - 1;
                
                for (var i = 0;  i < beforeIndex;  i++) {
                    indexNode = indexNode.next;    
                }
                
                //
                // at the position, so insert the node
                //
                newNode.next = indexNode.next;
                indexNode.next = newNode;
            }
            
            return newNode;
        },
        
        /**
         * toString
         * 
         * A simple string output of the list in the form [x1,x2,...,xn]
         */
        toString: function() {
            var curr = head;
            var result = '[';
            
            while (curr !== null) {
                result += curr.item;
                
                if (curr.next) {
                    result += ',';    
                }
                
                curr = curr.next;
            }
            
            result += ']';
            return result;
        },
        
        /**
         * remove
         * 
         * deletes an item at the given position from the list.
         * returns the node that was deleted.
         * throws OutOfBounds exception if position is negative or exceeds the 
         * length of the list.
         */
        remove: function(atIndex) {
            if (atIndex < 0 || atIndex > len) {
                throw "OutOfBoundsException: index " + atIndex + " is not within 0 and " + len;
            }
            
            var removedNode = null;
            
            if (atIndex === 0) {
                removedNode = head;
                head = head.next;
            }
            else {
                //
                // iterate to the position in the list right before the item that is 
                // the target of the deletion
                //
                var curr = head;
                var beforeIndex = atIndex - 1;
                
                for (var i = 0; i < beforeIndex; i++) {
                    curr = curr.next;
                }
                
                //
                // at the position where the removal needs to happen
                //
                removedNode = curr.next;
                curr.next = curr.next.next;
            }
            
            len--;
            return removedNode;
        }
    };
    
    return ifc;    
})();