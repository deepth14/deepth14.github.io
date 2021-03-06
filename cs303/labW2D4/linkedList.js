function getListToPrint() {
    return {
        value: 1, next:
        {
            value: 2, next:
            {
                value: 3, next:
                    { value: 4, next: null }
            }
        }
    };
}

function printListbyRecursion(start) {

    console.log(start.value);

    let next = start.next;

    if (next !== null) printListbyRecursion(next);

}

function callprintListbyRecursion() { printListbyRecursion(getListToPrint()); }


function printListbyIteration(start) {

    let retrn = [];

    while (start !== null) {
        retrn.push(start.value);
        start = start.next;
    }

    retrn.forEach(n => log(n));
}

function callprintListbyIteration() { printListbyIteration(getListToPrint()); }


/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


function reverseLinkedList(list) {


    if (list.next !== null) reverseLinkedList(list.next);
    console.log(list.value);

}

function callreverseLinkedList() { reverseLinkedList(getListToPrint()); }


function reverseLinkedListIteration(list) {

    let li = [];


    while (true) {
        li.push(list.value);
        if (list.next === null) break;
        list = list.next;
    }

    for (let i = li.length - 1; i >= 0; i -= 1) log(li[i]);

}

function callreverseLinkedListIteration() { 
    reverseLinkedListIteration(getListToPrint()); 
}