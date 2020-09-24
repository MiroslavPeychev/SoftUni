function findBiggestElement(inputArr) {
    let biggestElementsArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let biggestElement = Math.max(...inputArr[i]);
        biggestElementsArr.push(biggestElement);
    }

    let result = Math.max(...biggestElementsArr);

    console.log(result);
}

findBiggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );