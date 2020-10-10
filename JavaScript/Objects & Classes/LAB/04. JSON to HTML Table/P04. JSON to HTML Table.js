function createHTMLFromJSON(input) {
    let jsonData = input.shift();
    let students = JSON.parse(jsonData);
    let data = students[0];

    let html = '<table>';

    html += `<tr>${Object.keys(data).map(x => `<th>${x}</th>`).join('')}</tr>`;
    
    students.forEach(student => {
        html+= '<tr>';
        html+= Object.values(student).map(x => `<td>${x}</td>`).join('');
        html+= '</tr>';
    });

    html+='</table>'

    for (const value in element) {
        let cellValue = String(element[value])
            .replace(/&/gim, '&amp;')
            .replace(/</gim, '&lt;')
            .replace(/>/gim, '&gt;')
            .replace(/"/gim, '&quot;')
            .replace(/'/gim, '&#39;');

        result += `<td>${cellValue}</td>`;
    }

    console.log(html);
}

createHTMLFromJSON(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);