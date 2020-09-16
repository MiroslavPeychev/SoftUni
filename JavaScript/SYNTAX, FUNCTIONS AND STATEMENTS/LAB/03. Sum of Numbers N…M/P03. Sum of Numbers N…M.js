function solve(n, m) {

    let firstNum = Number(n);
    let secondNum = Number(m);

    let result = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }

    return result;
}

let result = solve('1', '5');

console.log(result);

