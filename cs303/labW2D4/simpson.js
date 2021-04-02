"use strict"
function getW2D4Tree () {

    class TreeNode {
        constructor(value) {
        this.value = value;
        this.descendents = [];
        }
    }

    // create nodes with values
    const abe = new TreeNode("Abe");
    const homer = new TreeNode("Homer");
    const bart = new TreeNode("Bart");

    const lisa = new TreeNode("Lisa");
    const maggie = new TreeNode("Maggie");
    // associate root with is descendents
    abe.descendents.push(homer);
    homer.descendents.push(bart, lisa, maggie);

    return [abe, TreeNode];

}
/**
 * 1,Log to the console the names of everyone in the tree.
 * 
 * 
 */
function logTreeNamebyRecursion (tree) {
    
    console.log(tree.value);
  
    if (tree.descendents.length > 0) {
     
      tree.descendents.forEach(n=>logTreeNamebyRecursion(n));
    }
      
  }

  /**
   * 2,Given a target value, return true or false if there is a node in the tree with the target value. E.g.,
contains(tree, “Lisa”) → true
contains(tree, “Crusty”) → false
   * 
   * 
   */
  function treeContains (tree, name) {

    let  retrn;
  
    if (tree.value === name) return true;
  
    if (tree.descendents.length > 0) {
  
      tree.descendents.forEach(function(n) {
         if (retrn === true) return retrn;
         
         retrn = treeContains (n, name);
       });
  
    } 
  
    return retrn || false;
  }
  