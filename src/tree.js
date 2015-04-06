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
     * visitDfs
     *
     * performs a depth-first search of the tree
     */
    var visitDfs = function(visit, index, num) {
        visit(item, index, num, 'start');
        
        if (hasChildren()) {
            visit(item, index, num, 'beforechildren');
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
                
                visit(item, index, num, 'beforechildvisit' + position);
                children[i].visitDfs(visit, i, children.length);
                visit(item, index, num, 'afterchildvisit' + position);
            }

            visit(item, index, num, 'afterchildren');
        }
    };
    
    /**
     *  toString
     * 
     *  A rudimentary plaintext representation of the tree
     */
    var toString = function() {
        var result = '(';
        
        visitDfs(function(item, index, length, context) {
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
    
    return {
        item: item,
        insertChild: insertChild,
        hasChildren: hasChildren,
        numChildren: numChildren,
        visitDfs: visitDfs,
        toString: toString
    };
};