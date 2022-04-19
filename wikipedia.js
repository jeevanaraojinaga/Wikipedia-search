let searchInp = document.getElementById('searchInput');
let resultSpace = document.getElementById('searchResults');
let spinEl = document.getElementById('spinner');


function createAndAppend(result) {
    //div
    let resultsBlock = document.createElement('div');
    resultsBlock.classList.add('result-item');
    resultSpace.appendChild(resultsBlock);
    //title
    let title = document.createElement('a');
    title.classList.add('result-title');
    title.href = result.link;
    title.target = '_blank';
    title.textContent = result.title;
    resultsBlock.appendChild(title);
    //br
    let brel = document.createElement('br');
    resultsBlock.appendChild(brel);

    //link
    let link = document.createElement('a');
    link.classList.add('result-url');
    link.target = '_blank';
    link.href = result.link;
    link.textContent = result.link;
    resultsBlock.appendChild(link);

    //description
    let description = document.createElement('p');
    description.classList.add('result-description');
    description.textContent = result.description;
    resultsBlock.appendChild(description);


}

function appendEvents(data) {
    spinEl.classList.toggle('d-none');
    for (let i of data) {
        createAndAppend(i);
    }
}

function search(event) {
    resultSpace.textContent = '';
    if (event.key === "Enter") {
        spinEl.classList.toggle('d-none');
        let url = 'https://apis.ccbp.in/wiki-search?search=' + searchInp.value;
        let operations = {
            method: "GET"
        };
        fetch(url, operations).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
            appendEvents(data.search_results);
        });
    }
}
searchInp.addEventListener('keydown', search);