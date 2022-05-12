let width = 0;

function move() {
    let progressing = document.getElementById("Progress");
    let interval = setInterval(progression, Math.random() * (100 - 10) + 1);

    function progression () {
        width ++;
        if (width > 100) {
            clearInterval(interval);
        } else {
            progressing.style.width = width + '%';
        }
    }
}