function printArrWithGivenDelimeter(inputArr) {
    let delimeter = inputArr.pop();
    console.log(inputArr.join(`${delimeter}`));
}

printArrWithGivenDelimeter(
['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);