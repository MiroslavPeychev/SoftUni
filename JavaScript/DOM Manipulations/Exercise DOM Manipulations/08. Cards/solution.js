function solve() {
   const playerFirst = document.getElementById('player1Div');
   const playerSecond = document.getElementById('player2Div');
   const result = document.getElementById('result').children;
   const history = document.getElementById('history');

   let playerFirstCard = '';
   let playerSecondCard = '';

   [playerFirst, playerSecond].forEach(player => player.addEventListener('click', (e) => {
      if (player === playerFirst) {
         playerFirstCard = playerFirstCard = showCard(playerFirstCard, result[0], e);
      } else {
         playerSecondCard = playerSecondCard = showCard(playerSecondCard, result[2], e);
      }

      cardBattle();
   }));

   function cardBattle() {
      let leftSpan = result[0].textContent;
      let rightSpan = result[2].textContent;

      if (leftSpan !== '' && rightSpan !== '') {
         let resultFirstPlayer = Number(playerFirstCard.name);
         let resultSecondPlayer = Number(playerSecondCard.name);

         if (resultFirstPlayer > resultSecondPlayer) {
            createBorder(playerFirstCard, playerSecondCard)
         } else {
            createBorder(playerSecondCard, playerFirstCard)
         }

         saveHistory();
         defaultValues();
      }
   }

   function createBorder(card1, card2) {
      card1.style.border = "2px solid green";
      card2.style.border = "2px solid red";
   }

   function showCard(player, span, e) {
      e.target.src = "images/whiteCard.jpg";
      span.textContent = e.target.name;
      player = e.target;
      return player;
   }

   function defaultValues() {
      result[0].textContent = '';
      result[2].textContent = '';
      playerFirstCard = '';
      playerSecondCard = '';
   }

   function saveHistory() {
      history.textContent += `[${playerFirstCard.name} vs ${playerSecondCard.name}] `;
   }
}