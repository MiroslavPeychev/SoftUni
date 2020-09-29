function extractSubSequenceFromArr(inputArr) {

    let max = Number.MIN_SAFE_INTEGER;

    inputArr = inputArr.filter(number => {
        if (number >= max) {
            max = number;
            return true;
        } else {
            return false;
        }
    });

    inputArr.forEach(e => console.log(e));
}

extractSubSequenceFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]);