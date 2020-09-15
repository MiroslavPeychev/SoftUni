function solve(strArray1, strArray2, strArray3) {
    let sumLength;
    let averageLength;

    let firstStringLength = strArray1.length;
    let secondStringLength = strArray2.length;
    let thirdStringLength = strArray3.length;

    sumLength = firstStringLength + secondStringLength + thirdStringLength;

    averageLength = Math.floor(sumLength/3);

    console.log(sumLength);
    console.log(averageLength)
}
    
    solve('chocolate', 'ice cream', 'cake');
