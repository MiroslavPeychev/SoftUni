function extractSubSequenceFromArr(inputArr) {

    let max = Number.MIN_SAFE_INTEGER;

    let output = inputArr.reduce((acc, current) => {
        if (current >= max) {
            max = current;
            acc.push(max);
        }
        
        return acc;
    }, []);

    console.log(output.join("\n"));
}

extractSubSequenceFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]);