export function renderResults(results) {
    // show parent_results when searching for books and stuffs
    document.getElementById('parent_results').classList.remove('hidden');
    const resultsDiv = document.getElementById('results');
    // Clear previous results
    resultsDiv.innerHTML = '';

    // when searching remove original h1 and add in a new h1 to the indexBody after the nav
    const indexH1 = document.querySelector('.index-h1');
    const inputValue = document.getElementById('query').value;

    indexH1.textContent = `Je hebt gezocht op: "${inputValue}"`;

    const resultsGroupedByFormat = {};

    console.log(results);

    // 1 item of each searchResult
    for (let searchResult of results) {
        // find the format from formats.text
        const [firstFormat] = searchResult.formats;
        const format = firstFormat.text;

        // group the results witht the same format
        if (resultsGroupedByFormat[format]) {
            resultsGroupedByFormat[format].push(searchResult);
        } else {
            resultsGroupedByFormat[format] = [searchResult];
        }
    }

    // check if there are no results
    if (results.length === 0) {
        indexH1.textContent = `Geen resultaten voor "${inputValue}"`;

        return;
    }

    // for every different format (book, cd)
    for (let entry of Object.entries(resultsGroupedByFormat)) {
        const [format, resultsByFormat] = entry;

        // add an h2 with the format
        const heading = document.createElement('h2');
        heading.textContent = format;
        heading.classList.add('format-heading'); // TODO

        resultsDiv.append(heading);

        const resultContainer = document.createElement('div');

        // for every results within the resultByFormat
        for (let searchResult of resultsByFormat) {
            // add the items underneath the heading
            // creating js elements
            // console.log(searchResult);
            const image = document.createElement('img');
            const container = document.createElement('a');
            const div = document.createElement('div');
            const imageContainer = document.createElement('div'); // Container for the image
            const titleHeading = document.createElement('h3'); // Separate heading for book title
            const authorParagraph = document.createElement('p'); // Separate paragraph for author
            const detailDiv = document.createElement('div');

            const bookTitle = searchResult.titles[0];
            const authors = unkownAuthor(searchResult.authors);

            // rendering
            container.setAttribute('href', `/details/${searchResult.id}`); // go to /details/${object.id}

            // if there's an coverimages available, then show and put the source, otherwise don't
            // this is only for courses, since the output is different than for books
            if (
                Array.isArray(searchResult.coverimages) &&
                searchResult.coverimages.length > 0
            ) {
                image.src = searchResult.coverimages[0];
            }

            // if there's an coverimages available and there's more than 0, then show and put the source, otherwise don't
            // this is for books and cd's for example
            if (
                Array.isArray(searchResult.coverimages) &&
                searchResult.coverimages.length > 1
            ) {
                image.src = searchResult.coverimages[1];
            } else {
                // sometimes an image still doesn't wants to load, then return a thumbnail image
                image.onerror = function () {
                    image.src = './images/fallback/thumbnail.png';
                };
            }

            // some images start with only a ~, then the oba website needs to be added.
            if (
                Array.isArray(searchResult.coverimages) &&
                searchResult.coverimages[0].startsWith('~')
            ) {
                image.src = `https://zoeken.oba.nl/${searchResult.coverimages[0]}`;
            }

            // appends
            container.appendChild(div);
            div.appendChild(imageContainer);
            imageContainer.appendChild(image);
            div.appendChild(detailDiv);
            detailDiv.appendChild(titleHeading);
            detailDiv.appendChild(authorParagraph);
            resultContainer.appendChild(container);
            // div.appendChild(formatsParagraph);

            // textcontents
            titleHeading.textContent = bookTitle;
            authorParagraph.textContent = authors;

            // adding classes for styling
            div.classList.add('resultContainer');
            imageContainer.classList.add('imageContainer');
            detailDiv.classList.add('detailContainer');
        }

        resultsDiv.append(resultContainer);
    }
}

// Function to replace authors name with nothing (courses don't have authors, so it's more suitable)
function unkownAuthor(authors) {
    // if there is no auteur then put unknown auteur
    if (!authors) {
        return '';
    }
    return authors;
}
