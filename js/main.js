console.log('work!');

function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


window.addEventListener('keydown', playAudio);

// for mobile
function playAudioOnClick() {
    const audioOnClick = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
    const key = document.querySelector(`.key[data-key="${this.getAttribute('data-key')}"]`);
    if (!audioOnClick) return;
    audioOnClick.currentTime = 0;
    audioOnClick.play();
    key.classList.add('playing');
}
var mouseClick = document.getElementsByClassName('key');

for (let i = 0; i < mouseClick.length; i++) {
    mouseClick[i].addEventListener('click', playAudioOnClick);

}



