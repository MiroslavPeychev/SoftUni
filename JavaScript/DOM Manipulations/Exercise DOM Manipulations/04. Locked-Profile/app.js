function lockedProfile() {
    let buttons = document.getElementsByTagName('button');

    Array.from(buttons).forEach(x => x.addEventListener('click', (e) => {
        let profile = e.currentTarget.parentElement;
        let hiddenInfo = profile.getElementsByTagName('div')[0]
        let IsLocked = profile.querySelector('input[type="radio"]:checked').value;

        if (IsLocked === 'unlock') {
            let buttonText = x.textContent;
            if (buttonText === 'Show more') {
                hiddenInfo.style.display = "inline-block";
                x.textContent = "Hide it";
            } else if (buttonText == "Hide it") {
                hiddenInfo.style.display = "none";
                x.textContent = "Show more"
            }
        }
    }))
}