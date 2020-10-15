function fillSpiralMatrix(rows, cols) {
    
    let result = new Array(rows).fill().map(() => new Array(cols).fill(''));
    let counter = 1;
    let startCol = 0;
    let endCol = cols - 1;
    let startRow = 0;
    let endRow = rows - 1;

    while(startCol <= endCol && startRow <= endRow) {
        
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }

        startRow++;

        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let k = endCol; k >= startCol; k--) {
            result[endRow][k] = counter;
            counter++;
        }

        endRow--;

        for (let m = endRow; m >= startRow; m--) {
            result[m][startCol] = counter;
            counter++;
        }

        startCol++;
    }

    for(let row in result) {
        console.log(result[row].join(" "));
    }
}

fillSpiralMatrix(5, 5);