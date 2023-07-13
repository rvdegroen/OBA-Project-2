// chat button
const input = document.getElementById('query');
const mobileTextForAssistent = document.querySelector('.mobile-text-p');
const mobileTextForAssistentContainer = document.querySelector('.mobile-text');

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

// mobile text animation when the users come on the page
if (mobileTextForAssistent) {
    setTimeout(() => {
        mobileTextForAssistent.textContent =
            'Typ hieronder iets in om door de bibliotheek te zoeken.';
    }, 2500);
}

// check inactivity for mobile
if (mobileTextForAssistent) {
    let activityTimeout;

    function handleTouchstart() {
        clearTimeout(activityTimeout);

        activityTimeout = setTimeout(function () {
            const yesButton = document.createElement('button');

            if (yesButton) {
            }

            if (!yesButton) {
                mobileTextForAssistent.textContent = 'Ben je er nog?';
                let yesButtonText = document.createTextNode('Ja');
                yesButton.appendChild(yesButtonText);
                mobileTextForAssistentContainer.appendChild(yesButton);

                console.log('De gebruiker is 20 seconden inactief geweest.');
            }
        }, 5000);
    }

    document.addEventListener('touchstart', handleTouchstart);
    document.addEventListener('mousemove', handleTouchstart);
}

export * from './animation.js';
