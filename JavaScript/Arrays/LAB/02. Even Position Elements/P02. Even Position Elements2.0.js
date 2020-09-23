function takeElementsOnEvenPositions(inputArr) {
    let filtered = inputArr.filter((a, i) => i % 2 === 0);

    console.log(filtered.join(' '));
}

takeElementsOnEvenPositions(['20', '30', '40'])