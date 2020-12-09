function attachEventsListeners() {
    let fromValueInput = document.getElementById('inputDistance');
    let toValueInput = document.getElementById('outputDistance');
    let buttonElement = document.getElementById('convert');
    let inputOptions = document.getElementById('inputUnits');
    let outputOptions = document.getElementById('outputUnits');

    buttonElement.addEventListener('click', () => {
        let optionsFrom = inputOptions.value;
        let optionsTo = outputOptions.value;
        let fromValue = fromValueInput.value;

        let middleValueInM = 0;
        let newValue = 0;

        switch (optionsFrom) {
            case 'km':
                middleValueInM = fromValue * 1000;
                break;
            case 'm':
                middleValueInM = fromValue * 1
                break;
            case 'cm':
                middleValueInM = fromValue * 0.01;
                break;
            case 'mm':
                middleValueInM = fromValue * 0.001;
                break;
            case 'mi':
                middleValueInM = fromValue * 1609.34;
                break;
            case 'yrd':
                middleValueInM = fromValue * 0.9144;
                break;
            case 'ft':
                middleValueInM = fromValue * 0.3048;
                break;
            case 'in':
                middleValueInM = fromValue * 0.0254;
                break;
        }

        switch (optionsTo) {
            case 'km':
                newValue = middleValueInM / 1000;
                break;
            case 'm':
                newValue = middleValueInM / 1
                break;
            case 'cm':
                newValue = middleValueInM / 0.01;
                break;
            case 'mm':
                newValue = middleValueInM / 0.001;
                break;
            case 'mi':
                newValue = middleValueInM / 1609.34;
                break;
            case 'yrd':
                newValue = middleValueInM / 0.9144;
                break;
            case 'ft':
                newValue = middleValueInM / 0.3048;
                break;
            case 'in':
                newValue = middleValueInM / 0.0254;
                break;
        }

        toValueInput.value = newValue;
    });
}