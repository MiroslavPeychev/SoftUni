function cooking(inputArray) {
    let number = inputArray.shift();

    for (let i = 0; i < inputArray.length; i++) {
        let command = inputArray[i];

        switch (command) {
            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number  *= 3;
                break;
            case 'fillet':
                number -= number * 0.20;
                break;
        }

        console.log(number);

    }
}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);