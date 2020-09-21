function validityChecker([x1, y1, x2, y2]) {
    let comparison = ([x1, y1, x2, y2]) => {
        let [x, y] = [x1 - x2, y1 - y2];
        let distance = Math.sqrt(x ** 2 + y ** 2);
        let isValidDistance;

        if (Number.isInteger(distance)) {

            isValidDistance = 'valid';
        } else {
            isValidDistance = 'invalid';
        }

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidDistance}`);
    }

    comparison([x1, y1, 0, 0]);
    comparison([x2, y2, 0, 0]);
    comparison([x1, y1, x2, y2]);
}

validityChecker([2, 1, 1, 1])

