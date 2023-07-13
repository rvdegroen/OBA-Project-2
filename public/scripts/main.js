import { renderResults } from './renderResults.js';
import * as animation from './animation.js';

const searchButton = document.getElementById('searchButton');
// modal
const dialogButton = document.getElementById('dialog-button');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const input = document.getElementById('query');
const lottieIndexAnimation = document.querySelector('.lottie-library');
const mobileTextForAssistent = document.querySelector('.mobile-text');

// mobile text animation
if (mobileTextForAssistent) {
    setTimeout(() => {
        mobileTextForAssistent.textContent =
            'Typ hieronder iets in om door de bibliotheek te zoeken.';
    }, 2500);
}

// als de muis niet is bewogen, wordt er aan de gebruiker gevraagd of ze er nog zijn.
if (mobileTextForAssistent) {
    let mouseTimeout;
    let touchTimeout;

    function handleMousemove() {
        clearTimeout(mouseTimeout);
        clearTimeout(touchTimeout);

        mouseTimeout = setTimeout(function () {
            mobileTextForAssistent.textContent = 'Ben je er nog?';
            console.log('De gebruiker is 30 seconden inactief geweest.');
        }, 10000);
    }

    function handleTouchstart() {
        clearTimeout(touchTimeout);
        clearTimeout(mouseTimeout);

        touchTimeout = setTimeout(function () {
            mobileTextForAssistent.textContent = 'Ben je er nog?';
            console.log('De gebruiker is 30 seconden inactief geweest.');
        }, 10000);
    }

    document.addEventListener('mousemove', handleMousemove);
    document.addEventListener('touchstart', handleTouchstart);
}

// fetch function
const search = async () => {
    // hide lottie when fetching
    lottieIndexAnimation.classList.add('hidden');

    const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: input.value,
        }),
    });

    if (response.ok) {
        const responseData = await response.json();
        // go through the responseData array, look at the formats
        // create a new object where the results are grouped by format
        // and then adjust renderResults to use this
        renderResults(responseData);
    } else {
        const errorMessage = await response.text();
        console.error(errorMessage);
    }
    input.value = '';
};

// handling the search function with await
const handleSearch = async () => {
    await search();
};

// press enter if you want to search
const searchOnEnter = async (event) => {
    if (event.key === 'Enter') {
        await search();
    }
};

// if there's a search button, search on click
if (searchButton) {
    searchButton.addEventListener('click', handleSearch);
}

// if there's an input, then run searchOnEnter, that fetches the data when you press on enter
if (input) {
    input.addEventListener('keydown', searchOnEnter);
}

// dialog src: https://www.youtube.com/watch?v=ywtkJkxJsdg&t=3s

// if there's modal, hide it by default
if (modal) {
    modal.classList.add('hidden');
}

// if there's a dialogButton, add the eventlistener to it to show the modal
if (dialogButton) {
    dialogButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.showModal();
    });
}

// if there's a closeButton, close the modal
if (closeButton) {
    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.close();
    });
}

// if there's a modal, make it possible to close the modal on escape
if (modal) {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            modal.classList.add('hidden');
            modal.close();
        }
    });
}

// if there's a modal, make it possible to exit the modal, if you click outside of it
if (modal) {
    modal.addEventListener('click', function (event) {
        if (event.target === this) {
            modal.close();
            modal.classList.add('hidden');
        }
    });
}
