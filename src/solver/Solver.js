/*global CANNON:true */

/**
 * @class CANNON.Solver
 * @brief Constraint equation solver base class.
 * @author schteppe / https://github.com/schteppe
 */
CANNON.Solver = function(){
    // All equations to be solved
    this.equations = [];
};

// Should be implemented in subclasses!
CANNON.Solver.prototype.solve = function(dt,world){
    // Should return the number of iterations done!
    return 0;
};

CANNON.Solver.prototype.addEquation = function(eq){
    this.equations.push(eq);
};

CANNON.Solver.prototype.removeEquation = function(eq){
    var i = this.equations.indexOf(eq);
    if(i!=-1)
        this.equations.splice(i,1);
};

CANNON.Solver.prototype.removeAllEquations = function(){
    this.equations = [];
};

