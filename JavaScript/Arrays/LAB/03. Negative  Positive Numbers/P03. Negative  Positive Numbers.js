function solve(inputArr) {
    let resultArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let currentElement = inputArr[i];

        if (currentElement >= 0) {
            resultArr.push(currentElement);
        } else {
            resultArr.unshift(currentElement);
        }
    }

    console.log(resultArr.join("\r\n"));
}

solve([3, -2, 0, -1]);