export async function printingChars() {
    let elements = Array.from(document.getElementsByClassName('print-chars'));
    let a = []
    elements.forEach(element => {
        a.push(element.innerHTML);
        element.innerHTML = '';
    });
    let i = 0;
    for (const element of elements) {
        await new Promise((resolve) => {
            setTimeout(() => {
                printLetterByLetter(element, a[i], 100);
                resolve();
            }, 50);
        })
        i++;
    }
}

export function printLetterByLetter(destination, message, interval) {
    return new Promise((resolve) => {
        var i = 0;
        var sInterval = setInterval(() => {
            destination.innerHTML += message.charAt(i);
            i++;
            if (i > message.length) {
                clearInterval(sInterval);
                resolve()
            }
        }, interval);
    });
}