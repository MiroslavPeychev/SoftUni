function solve() {

  let siteElements = Array.from(document.getElementsByClassName("link-1"));

  siteElements.forEach(x=>x.addEventListener('click', (e) =>{

    let currentTarget = e.currentTarget;
    let paragraphElement = currentTarget.getElementsByTagName('p')[0];
    let text = paragraphElement.textContent;
    let textParts = text.split(' ');
    let clicksCounter = Number(textParts[1]);
    clicksCounter++;
    textParts[1] = clicksCounter;
    paragraphElement.textContent = textParts.join(' ');
  }));
}