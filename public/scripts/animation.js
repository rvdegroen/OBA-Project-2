// chat button
const input = document.getElementById('query');

if (input) {
    input.addEventListener('focus', () => {
        const jumpingDiv = document.querySelector('.jumping');
        if (jumpingDiv) {
            jumpingDiv.classList.remove('jumping');
        }
    });
}

export * from './animation.js';