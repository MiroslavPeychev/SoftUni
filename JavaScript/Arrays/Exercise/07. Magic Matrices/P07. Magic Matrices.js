function checkIfMatrixIsMagick(inputMatrix) {
    for (let i = 0; i < inputMatrix.length - 1; i++) {
        let rowOneSum = inputMatrix[i].reduce((a, b) => a + b, 0);
        let rowTwoSum = inputMatrix[i + 1].reduce((a, b) => a + b, 0);

        let collOneSum = 0;
        let collTwoSum = 0;

        for (let j = 0; j < inputMatrix.length; j++) {
            collOneSum += inputMatrix[i][j];
            collTwoSum += inputMatrix[i + 1][j];
        }

        if (rowOneSum !== rowTwoSum || collOneSum !== collTwoSum) {
            return false;
        }
    }

    return true;
}

checkIfMatrixIsMagick(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);