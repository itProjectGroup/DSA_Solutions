/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
var value = init;
    return {
        increment: function() {
            return ++value;
        },
        reset: function() {
            return value = init;
        },
        decrement: function() {
            return --value;
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */