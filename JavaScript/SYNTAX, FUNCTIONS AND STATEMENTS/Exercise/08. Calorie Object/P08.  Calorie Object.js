function takeFoodCalories(inputArr) {
    let foodArgs = [];

    for (let i = 0; i < inputArr.length; i += 2) {
        let foodName = inputArr[i];
        let foodCalories = Number(inputArr[i + 1]);

        foodArgs.push(`${foodName}: ${foodCalories}`);
    }

    console.log(`{ ${foodArgs.join(', ')} }`);
}

takeFoodCalories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);