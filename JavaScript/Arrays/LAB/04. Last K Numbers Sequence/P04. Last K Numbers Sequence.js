function solve(n, k) {
    
    let output = [];
    output[0] = 1;
    
    for (let i = 1; i < n; i++) {
        
        let sum =0;
        let startIndex = Math.max(0, i-k);
        
        for (let j = startIndex; j < i; j++) {
            let currentElement = output[j];
            sum += currentElement;
        }

        output.push(sum);
    }

    console.log(output);
}

solve(6, 3)