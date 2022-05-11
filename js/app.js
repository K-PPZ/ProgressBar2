let width = 0;

function move() {
    let progressing = document.getElementById("Progress");
    let interval = setInterval(progression, Math.random() * (10 - 100) + 100);

    function progression () {
        width ++;
        if (width > 100) {
            clearInterval(interval);
        } else {
            progressing.style.width = width + '%';
        }
    }
}