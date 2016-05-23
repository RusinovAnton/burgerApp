module.exports = function(child, parent){
    // inherit parent
    child.prototype = Object.create(parent.prototype);

// correct the constructor pointer because it points to parent
    child.prototype.constructor = child;
};
