function findNumberOfEqualPairs(matrix) {
    let pairsCount = 0;

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            let currentElement = matrix[row][col];
            let elemetToCompare = matrix[row][col + 1];

            if (currentElement === elemetToCompare) {
                pairsCount++;
            }

            if (row < matrix.length - 1) {
                let nextRowElement = matrix[row + 1][col];

                if (currentElement === nextRowElement) {
                    pairsCount++;
                }
            }
        }
    }

    console.log(pairsCount);
}

findNumberOfEqualPairs([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)