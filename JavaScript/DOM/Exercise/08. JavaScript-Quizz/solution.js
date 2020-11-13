function solve() {
  var result = 0;
  var clicks = 0;

  let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let answers = Array.from(document.querySelectorAll('.answer-text'));

  answers.forEach(x => x.addEventListener('click', function (e) {
    let selectedAnswer = e.target.textContent;

    if (rightAnswers.includes(selectedAnswer)) {
      result++;
    }

    let sections = document.querySelectorAll('section');
    let currSelection = sections[clicks];
    currSelection.style.display = 'none';

    if (clicks < 2) {
      let nextSelection = sections[clicks + 1];
      nextSelection.style.display = "block";
      clicks++;
    } else {
      let rightAnswersMessage = 'You are recognized as top JavaScript fan!';
      let rightAnswersNuberMessage = `You have ${result} right answers`;

      document.querySelector('#results').style.display = "block";
      let resultPlace = document.querySelector("#results h1");
      resultPlace.textContent += result === 3
        ? rightAnswersMessage : rightAnswersNuberMessage;
    }
  }));
}