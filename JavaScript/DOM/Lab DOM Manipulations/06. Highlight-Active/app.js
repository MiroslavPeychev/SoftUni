function focus() {
    let elements = document.getElementsByTagName("div")[0];

    Array.from(elements.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("focus", focuseElement);
    });

    Array.from(elements.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("blur", unfocuseElement);
    });

    function focuseElement(e) {
        let parent = e.target.parentNode;
        parent.classList.add("focused");
    }

    function unfocuseElement(e) {
        let parent = e.target.parentNode;
        parent.classList.remove("focused");
    }
}