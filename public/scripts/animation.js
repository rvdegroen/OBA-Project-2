// chat button
const input = document.getElementById('query');
const mobileTextForAssistent = document.querySelector('.mobile-text-p');
// const mobileTextForAssistentContainer = document.querySelector('.mobile-text');
const mobileAssistentIcon = document.querySelector('.mobile-container');
const resultContainer = document.querySelector('.resultContainer');
const detailPage = document.querySelector('.detail-pagina');

// remove jumping animation when input has been focussed on
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

// toggle assistent text
mobileAssistentIcon.addEventListener('click', () => {
    mobileTextForAssistent.classList.toggle('hidden');
});

// text animation when the users first come on the page
document.addEventListener('DOMContentLoaded', function () {
    // check if the current URL is "/"
    if (window.location.pathname === '/') {
        window.timeout1 = setTimeout(() => {
            mobileTextForAssistent.textContent =
                'Ik ben jouw virtuele assistent en help je graag op weg.';

            window.timeout2 = setTimeout(() => {
                mobileTextForAssistent.textContent =
                    'Als je mij niet nodig hebt, dan kan je me altijd uitzetten door op mijn icoontje te klikken.';

                window.timeout3 = setTimeout(() => {
                    mobileTextForAssistent.textContent =
                        'Kom je ergens niet uit? Dan kan je klikken op de knop "spreek een medewerker".';

                    window.timeout4 = setTimeout(() => {
                        mobileTextForAssistent.textContent =
                            'Typ hieronder iets in om door de bibliotheek te zoeken.';
                    }, 4000);
                }, 5000);
            }, 5000); //tweede
        }, 2000); //eerste
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // check if the current URL is "/"
    if (window.location.pathname === '/details') {
        setTimeout(() => {
            mobileTextForAssistent.textContent = 'Hier staan je favorieten.';

            setTimeout(() => {
                mobileTextForAssistent.textContent =
                    'Deze heb je eerder opgeslagen, doordat je op een hartje hebt gedrukt.';
            }, 2500); //eerste
        }, 4000); //eerste
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.href.includes('/details/')) {
        setTimeout(() => {
            mobileTextForAssistent.textContent =
                'Op deze pagina vind je meer informatie over het item waarop je hebt gedrukt.';

            setTimeout(() => {
                mobileTextForAssistent.textContent =
                    'Items kan je opslaan, door op de ronde favorieten knop te drukke.';

                setTimeout(() => {
                    mobileTextForAssistent.textContent =
                        'Deze kan je later weer terug vinden op de favorieten pagina.';
                }, 4000); //eerste
            }, 4000); //eerste
        }, 4000); //eerste
    }
});

export * from './animation.js';
