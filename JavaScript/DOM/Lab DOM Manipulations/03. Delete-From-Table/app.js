function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value.trim();
    let tableRows = document.getElementsByTagName('tr');
    let tableRowToBeDeleted = '';
    let resultElement = document.getElementById('result');

    for (let tr of tableRows) {
        let td = tr.children[1];

        if (td.textContent === input) {
           tableRowToBeDeleted = tr;
           resultElement.innerText = 'Deleted.';
           tableRowToBeDeleted.parentNode.removeChild(tableRowToBeDeleted);
           return;
        }
    }

    resultElement.textContent = 'Not found.'
}