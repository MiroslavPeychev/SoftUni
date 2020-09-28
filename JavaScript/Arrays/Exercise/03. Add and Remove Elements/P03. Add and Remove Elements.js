function AddRemoveElements(inputArr) {
    let resultArr=[];
    let count = 1;

    for (let i = 0; i < inputArr.length; i++) {
        let currentElement = inputArr[i];

        if (currentElement === 'add') {
            resultArr.push(count);
        } else if(currentElement === 'remove') {
            resultArr.pop();
        }

        count++;
    }

    if (resultArr.length > 0) {
        console.log(resultArr.join("\n"));
    } else {
        console.log("Empty");
    }
}

AddRemoveElements
(
['add', 
'add', 
'add', 
'add']
);