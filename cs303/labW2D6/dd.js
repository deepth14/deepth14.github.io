"use strict"
"use strict";
let list = {
    value: 3,
    next: {
        value: 2,
        next: {
            value: 6,
            next: {
                value: 6,
                next: {
                    value: null
                }
            }
        }
    }
};
function countTargetNodes(list, target) {
    let temp = list;
    let count = 0;
    while (temp) {
        if (temp.value === target) {

            count++;
        }
        temp = temp.next;
    }
    return count;
}
console.log(countTargetNodes(list, 6))