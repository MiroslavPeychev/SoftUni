function printEveryNthElementInArr(inputArr) {
    let step = Number(inputArr.pop());

    for (let i = 0; i < inputArr.length; i+=step) {
        let currentElement = inputArr[i];
        console.log(currentElement);
    }
}

printEveryNthElementInArr(
['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);