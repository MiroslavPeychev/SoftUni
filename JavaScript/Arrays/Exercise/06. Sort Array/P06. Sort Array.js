function sortArrByTwoCriteria(inputArr) {
    inputArr
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length);

    console.log(inputArr.join("\r\n"));
}

sortArrByTwoCriteria(['alpha', 'beta', 'gamma']);