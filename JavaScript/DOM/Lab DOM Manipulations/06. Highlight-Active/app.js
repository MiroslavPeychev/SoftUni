function focus() {
    let elements = document.getElementsByTagName('div')[0];

    Array.from(elements.getElementsByTagName('input')).forEach(element => {
        element.addEventListener('focus', focus)
    });

    Array.from(elements.getElementsByTagName('input')).forEach(element => {
        element.addEventListener('blur', unfocuse)
    });

    function focus(e) {
        let parent = e.tartet.parentNode;
        parent.classList.add('focused')
    }

    function unfocuse(e) {
        let parent = e.tartet.parentNode;
        parent.classList.remove('focused')
    }
}