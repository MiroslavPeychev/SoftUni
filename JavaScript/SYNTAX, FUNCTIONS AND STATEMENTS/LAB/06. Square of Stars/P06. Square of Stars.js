function printRectangleOfStars(inputNumber = 5) {
    
    for (let i = 0; i < inputNumber; i++) {
        
        console.log("* ".repeat(inputNumber).trimEnd());
    } 
}

printRectangleOfStars();