function sumDiagonals(inputArr) {
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    let result =[];

    for (let i = 0; i < inputArr.length; i++) {
        sumMainDiagonal += inputArr[i][i];
        sumSecondaryDiagonal+= inputArr[i][inputArr.length - i -1];
    }

    result.push(sumMainDiagonal)
    result.push(sumSecondaryDiagonal);

    console.log(result.join(' '));
}

sumDiagonals([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );