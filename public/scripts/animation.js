// chat button
const input = document.getElementById('query');

if (input) {
    input.addEventListener('focus', () => {
        const jumpingDiv = document.querySelector('.jumping');
        const lottieCursor = document.querySelector('.lottie-input-cursor');
        if (jumpingDiv) {
            jumpingDiv.classList.remove('jumping');
            lottieCursor.classList.add('hidden');
        }
    });
}

export * from './animation.js';
