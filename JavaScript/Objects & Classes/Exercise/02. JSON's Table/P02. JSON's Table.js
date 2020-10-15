function createHTMLTableFromJSON(inputArg) {
    let html = '<table>\n';
    let employees = [];

    inputArg.forEach(x => {
        employees.push(JSON.parse(x));
    })

    html += createTable(employees) + '</table>';

    function createTable(employees) {
        let result = '';

        employees.forEach(employee => {
            result += '\t<tr>\n';

            Object.values(employee).forEach(v => {
                result += `\t\t<td>${v}</td>\n`;
            })

            result += '\t</tr>\n';
        })

        return result;
    }

    console.log(html);
}

createHTMLTableFromJSON(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);