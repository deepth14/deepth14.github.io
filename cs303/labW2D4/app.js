function getTree() {

    let node3 = {
      name: "p",
      value: "This is text in the a paragraph",
      children: null
    };
    let node4 = {
      name: "label",
      value: "Name",
      children: null
    };
    let node5 = {
      name: "input",
      value: "this was typed by a user",
      children: null
    };
    let node2 = {
      name: "div",
      value: null,
      children: [node4, node5]
    };
    let node1 = {
      name: "body",
      children: [node2, node3],
      value: null,
    };
  
  
    return node1;
  }
  //RTREE
  
  function recurseTree(tree) {
  
    console.log(tree.name, tree.value);
    let  child = tree.children;
   
    if (child !== null) child.forEach(n => recurseTree(n));
  
  }
  
  
  function callrecurseTree(){recurseTree(getTree());}
  //RTREE
  //ITREE//ITREE
  // eslint-disable-next-line require-jsdoc, no-unused-vars
  function iterativeTree(tree) {
  
  let  stack = [];
  
    do {
  
      // Log and Remove from Stack
      console.log(tree.name, tree.value);
      stack.shift();
     let child = tree.children;
  
      // Add Children to Stack
      if (child !== null) child.forEach(n=>stack.push(n));
   
      tree = stack[0];
    
    } while(tree !== undefined);
    
  }
 
  function calliterativeTree(){recurseTree(getTree());}