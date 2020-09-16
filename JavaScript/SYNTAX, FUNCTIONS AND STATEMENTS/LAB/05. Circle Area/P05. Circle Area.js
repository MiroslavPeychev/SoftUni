function calculateCircleArea(input) {
    let typeOfinput = typeof input;

    if(typeOfinput == 'number') {
        let circleArea = Math.PI * Math.pow(input, 2);
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfinput}.`);
    }
}

calculateCircleArea('name')