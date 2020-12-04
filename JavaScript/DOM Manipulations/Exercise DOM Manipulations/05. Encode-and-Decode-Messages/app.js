function encodeAndDecodeMessages() {
    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];
    let enteredMessageText = document.getElementsByTagName('textarea')[0];
    let decodedMessageText = document.getElementsByTagName('textarea')[1];

    encodeButton.addEventListener('click', () => {
        let enteredMessage = enteredMessageText.value;
        let enteredMessageLenght = enteredMessage.length;
        let encodedMessage = '';
        

        for (let i = 0; i < enteredMessageLenght; i++) {
            encodedMessage += String.fromCharCode(enteredMessage.charCodeAt(i) + 1);
        }

        decodedMessageText.value = encodedMessage;
        enteredMessageText.value = '';
    });

    decodeButton.addEventListener('click', () => {
        let enteredMessage = decodedMessageText.value;
        let enteredMessageLenght = enteredMessage.length;
        let encodedMessage = '';

        for (let i = 0; i < enteredMessageLenght; i++) {
            encodedMessage += String.fromCharCode(enteredMessage.charCodeAt(i) - 1);
            
        }

        decodedMessageText.value = encodedMessage;
    });
}