document.getElementById('magic-trick-btn').onclick =function () {
    gif = document.getElementById('magic-trick');
    if (gif.style.display === 'block') {
        gif.style.display = 'none';
    } else {
        gif.style.display = 'block';
    }
}