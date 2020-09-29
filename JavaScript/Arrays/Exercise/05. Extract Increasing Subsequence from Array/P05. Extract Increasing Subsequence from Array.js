function extractSubSequenceFromArr(inputArr) {

    let max = Number.MIN_SAFE_INTEGER;

    inputArr.forEach(number => {
        if (number >= max) {
            max = number;
            console.log(max);
        }
    });
}

extractSubSequenceFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]);