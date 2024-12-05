const words = ['프로젝트', '타자', '연습', '게임', '탈리', '속도', '효율'];
let currentWord = '';
let score = 0;

const wordElement = document.getElementById('word');
const inputElement = document.getElementById('input');
const scoreElement = document.getElementById('score');

function setNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordElement.textContent = currentWord;
    inputElement.value = '';
}

inputElement.addEventListener('input', () => {
    if (inputElement.value === currentWord) {
        score++;
        scoreElement.textContent = `점수: ${score}`;
        setNewWord();
    }
});

setNewWord();
