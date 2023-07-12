// chat button
const input = document.getElementById('query');

if (input) {
    input.addEventListener('focus', () => {
        const jumpingDiv = document.querySelector('.jumping');
        const lottieCursor = document.querySelector('.lottie-input-cursor');
        const lottieHand = document.querySelector('.lottie-input-hand');

        if (jumpingDiv && lottieCursor) {
            jumpingDiv.classList.remove('jumping');
            lottieCursor.classList.add('hidden');
        }

        if (jumpingDiv && lottieHand) {
            jumpingDiv.classList.remove('jumping');
            lottieHand.classList.add('hidden');
        }
    });
}

export * from './animation.js';
