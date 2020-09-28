function rotateArray(inputArr) {
    let numberOfRotations = Number(inputArr.pop());
    let realRotationNeeded = numberOfRotations % 100;
    
    for (let i = 0; i < realRotationNeeded; i++) {
        let lastElement = inputArr.pop();
        inputArr.unshift(lastElement);
    }

    console.log(inputArr.join(' '));
}

rotateArray
(
['1', 
'2', 
'3', 
'4', 
'2']
);