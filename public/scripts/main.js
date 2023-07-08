import { renderResults } from './renderResults.js';

const searchButton = document.getElementById('searchButton');
// modal
const dialogButton = document.getElementById('dialog-button');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
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

if (searchButton) {
    searchButton.addEventListener('click', async () => {
        const input = document.getElementById('query');

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
    });
}

// dialog src: https://www.youtube.com/watch?v=ywtkJkxJsdg&t=3s

if (modal) {
    modal.classList.add('hidden');
}

if (dialogButton) {
    dialogButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.showModal();
    });
}

if (closeButton) {
    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.close();
    });
}
