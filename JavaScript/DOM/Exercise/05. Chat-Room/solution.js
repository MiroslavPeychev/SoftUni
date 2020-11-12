function solve() {
   let inputAsText = document.getElementById('chat_input');
   let sendButton = document.getElementById('send');
   let myMessagesTemplate = document.getElementsByClassName('my-message')[0];
   let placeToDisplayMsg = document.getElementById('chat_messages');

   sendButton.addEventListener('click', function () {
      let div = myMessagesTemplate.cloneNode(true);
      let message = inputAsText.value;

      if (message !== '') {
         div.textContent = message;
         placeToDisplayMsg.appendChild(div);
         inputAsText.value = '';
      }
   });
}