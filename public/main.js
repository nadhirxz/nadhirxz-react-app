headerText = document.getElementById('header-text');
headText = headerText.innerHTML;
console.log(headText)
headerText.innerHTML = "";

hidden = document.getElementsByClassName('App-hidden')[0];
if (window.location.pathname == '/') {
    titleText = document.getElementById('title-text');
    devText = titleText.innerHTML;
    titleText.innerHTML = "";

    contentText = document.getElementById('content-text');
    contText = contentText.innerHTML;
    contentText.innerHTML = "";

    printLetterByLetter(headerText, headText, 100).then(() => {
        setTimeout(() => {
            headerText.style.transform = 'translateY(-800%)';
            setTimeout(() => {
                headerText.style.opacity = 0;
                hidden.style.opacity = 1;
                headerText.parentNode.removeChild(headerText);
                printLetterByLetter(titleText, devText, 100);
                printLetterByLetter(contentText, contText, 50);
            }, 400);
        }, 700)
    });
} else {
    headerText.parentNode.removeChild(headerText);
    hidden.style.opacity = 1;
}

function printLetterByLetter(destination, message, interval) {
    return new Promise((resolve, reject) => {
        var i = 0;
        var sInterval = setInterval(() => {
            destination.innerHTML += message.charAt(i);
            i++;
            if (i > message.length){
                clearInterval(sInterval);
                resolve()
            }
        }, interval);
    });
}