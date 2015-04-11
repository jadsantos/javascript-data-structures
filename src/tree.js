'use strict';

var datastructs = datastructs || {};

datastructs.Tree = function(item) {
    /*
     * private members
     */
    var item = item;
    var children = null;

    /**
     * hasChildren
     * 
     * returns true if there are children for this node
     */
    var hasChildren = function() {
        return children != null && children.length > 0;    
    };
    
    /**
     * numChildren
     * 
     * returns the number of children this tree has
     */
    var numChildren = function() {
        return children == null? 0 : children.length;
    };
    
    /**
     * size
     * 
     * total number of nodes in the tree
     */
    var size = function() {
        // perform a breadth-first search
        var count = 0;
        
        visitBfs(function(item, index) {
            count++;
        });
        
        return count;
    };
    
    /**
     * insertChild
     * 
     * Adds a child node to the end of the children,
     * returning the child that was created
     */
    var insertChild = function(item) {
        var newNode = new datastructs.Tree(item);

        if (!children) {
            children = [];
        }
        
        children.push(newNode);

        return newNode;
    }; 
    
    /**
     * child
     * 
     * returns the child at the given index
     */
    var child = function(index) {
        var result = null;
        
        if (hasChildren()) {
            result = children[index];
        }    
        
        return result;
    };
    
    /**
     * visitDfs
     *
     * performs a depth-first search of the tree
     */
    var visitPreOrder = function(visit, index, length) {
        visit(item, index, length, 'start');
        
        if (hasChildren()) {
            visit(item, index, length, 'beforechildren');
            var position = '';

            for (var i = 0; i < children.length; i++) {
                if (i === 0 && i === children.length - 1) {
                    position = 'firstlast';
                }
                else if (i === 0) {
                    position = 'first';
                }
                else if (i === children.length - 1) {
                    position = 'last';
                }
                else {
                    position = '';
                }
                
                visit(item, index, length, 'beforechildvisit' + position);
                children[i].visitPreOrder(visit, i, children.length);
                visit(item, index, length, 'afterchildvisit' + position);
            }

            visit(item, index, length, 'afterchildren');
        }
    };
    
    /**
     * visitBfs
     * 
     * Performs a breadth-first search of the tree
     * 
     */
    var visitBfs = function(visit) {
        var i = 0;
        var track = [self];

        while (i < track.length) {
            visit(track[i].item, i);
            
            if (track[i].hasChildren()) {
                for (var j = 0;  j < track[i].numChildren();  j++) {
                    track.push(track[i].child(j));
                }
            }
            
            i++;
        }
    };
    
    /**
     * visitPostOrder
     * 
     * Performs an post-order traversal of the tree
     */
    var visitPostOrder = function(node, visit) {
        if (node === null) {
            node = self;
        }
        
        if (node.hasChildren()) {
            for (var i = 0;  i < node.numChildren();  i++) {
                visitPostOrder(node.child(i), visit);
            }
        }
        
        visit(node.item);
    };
    
    /**
     *  toString
     * 
     *  A pre-order representation of the tree
     */
    var toString = function() {
        var result = '(';
        
        visitPreOrder(function(item, index, length, context) {
            if (context === 'start') {
                result += item;
            }
            else if (context === 'beforechildren') {
                result += ' (';
            }
            else if (context.indexOf('afterchildvisit') >= 0) {
                if (context !== 'afterchildvisitlast' && context !== 'afterchildvisitfirstlast') {
                    result += ', ';
                }
            }
            else if (context === 'afterchildren') {
                result += ')';
            }
        });

        result += ')';
        
        return result;
    };
    
    /**
     * toStringBfs
     * 
     * returns a string representing the tree in breadth first search order
     */
    var toStringBfs = function() {
        var result = '(';

        visitBfs(function(item, index) {
            result += item;
            result += ', ';
        });
        
        result = result.substr(0, result.length - 2);
        result += ')';
        
        return result;
    };
    
    var toStringPostOrder = function() {
        var result = '(';
        
        visitPostOrder(null, function(item) {
            result += item;
            result += ', ';
        });
        
        result = result.substr(0, result.length - 2);
        result += ')';
        
        return result;
    };
    
    var self = {
        item: item,
        insertChild: insertChild,
        child: child,
        hasChildren: hasChildren,
        numChildren: numChildren,
        size: size,
        visitPreOrder: visitPreOrder,
        visitPostOrder: visitPostOrder,
        visitBfs: visitBfs,
        toString: toString,
        toStringBfs: toStringBfs,
        toStringPostOrder: toStringPostOrder
    };
    
    return self;
    
};