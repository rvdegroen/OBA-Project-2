// chat button
const input = document.getElementById('query');
const mobileTextForAssistent = document.querySelector('.mobile-text-p');
// const mobileTextForAssistentContainer = document.querySelector('.mobile-text');
const mobileAssistentIcon = document.querySelector('.mobile-container');
const resultContainer = document.querySelector('.resultContainer');

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
    timeout1 = setTimeout(() => {
        mobileTextForAssistent.textContent =
            'Ik ben jouw virtuele assistent en help je graag op weg.';

        timeout2 = setTimeout(() => {
            mobileTextForAssistent.textContent =
                'Als je mij niet nodig hebt, dan kan je me altijd uitzetten door op mijn icoontje te klikken.';

            timeout3 = setTimeout(() => {
                mobileTextForAssistent.textContent =
                    'Kom je ergens niet uit? Dan kan je klikken op de knop "spreek een medewerker".';

                timeout4 = setTimeout(() => {
                    mobileTextForAssistent.textContent =
                        'Typ hieronder iets in om door de bibliotheek te zoeken.';
                }, 4000);
            }, 6000);
        }, 7000);
    }, 3000);
}

// toggle assistent text
mobileAssistentIcon.addEventListener('click', () => {
    mobileTextForAssistent.classList.toggle('hidden');
});

// when a user clicks on an item (book, cd, from their search result then:)
resultContainer.addEventListener('click', () => {
    setTimeout(() => {
        mobileTextForAssistent.textContent = 'Hier vind je meer informatie.';
    }, 2500);
});

export * from './animation.js';
