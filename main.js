var button = document.querySelector('button');
button.addEventListener('click', bgChange);

function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange() {
    var color = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.background = color;
}