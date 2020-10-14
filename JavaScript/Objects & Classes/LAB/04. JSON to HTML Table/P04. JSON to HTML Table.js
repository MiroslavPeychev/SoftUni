function createHTMLFromJSON(json){
   
    let text = JSON.parse(json);
    let html = "";

    html += "<table>\n";
    html += "   <tr>";

    for (const key in text[0]) {
        if (text[0].hasOwnProperty(key)) {
            html += `<th>${key}</th>`;
        }
    }

    html += "</tr>\n";

    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        html += "   <tr>";

        for (const value in element) {
            let cellValue = String(element[value])
                .replace(/&/gim, '&amp;')
                .replace(/</gim, '&lt;')
                .replace(/>/gim, '&gt;')
                .replace(/"/gim, '&quot;')
                .replace(/'/gim, '&#39;');

            html += `<td>${cellValue}</td>`;
        }

        html += "</tr>\n"
    }

    html += "</table>";

    console.log(html);
}

createHTMLFromJSON(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);