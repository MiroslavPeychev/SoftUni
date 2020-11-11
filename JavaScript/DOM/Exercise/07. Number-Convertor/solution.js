function solve() {

    let inputNumber = document.getElementById('input');
    let menuTo = document.getElementById('selectMenuTo');
    let optionsFromMenuTo = document.querySelector("#selectMenuTo option");
    let buttonConvert = document.getElementsByTagName('button')[0];
    let inputResult = document.getElementById('result');

    extendList('binary', 'Binary');
    extendList('hexadecimal', 'Hexadecimal');


    function extendList(valueToBeAdded, contentToBeAdded) {
        let newOption = optionsFromMenuTo.cloneNode(true);
        newOption.value = `${valueToBeAdded}`;
        newOption.textContent = `${contentToBeAdded}`;
        menuTo.appendChild(newOption);
    }

    buttonConvert.addEventListener(`click`, function () {
        let currentResult = parseInt(inputNumber.value);

        if (menuTo.value === 'binary') {
            inputResult.value = currentResult.toString(2);
        } else if(menuTo.value === 'hexadecimal') {
            inputResult.value = currentResult.toString(16).toUpperCase();
        }

    });
}