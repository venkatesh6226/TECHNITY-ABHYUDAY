const soundMapping = {
    'w': 'crash',
    'a': 'kick-bass',
    's': 'snare',
    'd': 'tom-1',
    'j': 'tom-2',
    'k': 'tom-3',
    'l': 'tom-4'
};

function playSound(key) {
    const soundFileName = soundMapping[key];
        const audio = new Audio(`sounds/${soundFileName}.mp3`);
        audio.play();
}

const drumButtons = document.querySelectorAll('.drum');
drumButtons.forEach(button => {
    button.onclick = function () {
        const buttonKey = this.innerHTML;
        playSound(buttonKey);
    };
});