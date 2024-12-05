document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const languageOptions = document.getElementById('language-options');
    const practiceOptions = document.getElementById('practice-options');

    startButton.addEventListener('click', () => {
        startButton.classList.add('hidden');
        languageOptions.classList.remove('hidden');
    });

    document.querySelectorAll('.blue-button').forEach(button => {
        button.addEventListener('click', () => {
            languageOptions.classList.add('hidden');
            practiceOptions.classList.remove('hidden');
        });
    });

    document.querySelectorAll('.green-button').forEach(button => {
        button.addEventListener('click', () => {
            alert(`${button.textContent} 모드를 선택하셨습니다.`);
        });
    });
});
