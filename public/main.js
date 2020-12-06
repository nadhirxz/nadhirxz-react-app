headerText = document.getElementById('header-text');
titleText = document.getElementById('title-text');
contentText = document.getElementById('content-text');

headText = "Hi, I'm Nadhir.";
devText = "I'm a Developer";
contText = "I make stuf bla bla bla idk i use a lot of things idk how to express myself haha lol sorry. Lorem ipsum that latin thing idk haha filler goes brrrrr";

printLetterByLetter(headerText, headText, 100).then(() => {
    setTimeout(() => {
        headerText.style.transform = 'translateY(-800%)';
        setTimeout(() => {
            headerText.style.opacity = 0;
            document.getElementsByClassName('App-hidden')[0].style.opacity = 1;
            headerText.parentNode.removeChild(headerText);
            printLetterByLetter(titleText, devText, 100);
            printLetterByLetter(contentText, contText, 50);
        }, 400);
    }, 700)
});

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