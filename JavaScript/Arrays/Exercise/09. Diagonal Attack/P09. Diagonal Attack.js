function diagonalAttack(matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let countLeft = 0;
    let counterRight = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currNum = matrix[i].split(' ');
        for (let j = 0; j < currNum.length; j++) {
            leftDiagonalSum += Number(currNum[countLeft]);
            rightDiagonalSum += Number(currNum[currNum.length - 1 - countLeft])
            break;
        }

        countLeft++;
    }

    for (let i = 0; i < matrix.length; i++) {
        let currNum = matrix[i].split(' ');
        if (leftDiagonalSum === rightDiagonalSum) {
            for (let j = 0; j < currNum.length; j++) {
                if (j !== counterRight && j !== currNum.length - 1 - counterRight) {
                    currNum[j] = leftDiagonalSum;
                }
            }
        }

        console.log(currNum.join(' '));

        counterRight++;
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);