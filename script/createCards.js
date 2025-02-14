const addCardsBtn = document.getElementById('addCardsBtn'); 
const cardTitle = document.getElementById('cardTitle'); 
const cardDescription = document.getElementById('cardDescription'); 
const cardsContainer = document.getElementById('cardsContainer'); 
const cardMsg = document.getElementById('cardMsg'); 
const loadMore = document.getElementById('loadMore'); 
const loadLess = document.getElementById('loadLess'); 

loadMore.style.display = 'none';
loadLess.style.display = 'none';

let cardCounter = 0;
const cardBgs = ['violet', 'red', 'orange', 'blue', 'green'];
let lastbg = 'red';
let cardIds = [];
let maxItems = 3;
addCardsBtn.addEventListener('click', () => {
    let title = cardTitle.value;
    let description = cardDescription.value;
    if (validateData(title, description)) {
        createCard(title, description);
        cardMsg.innerHTML = '';
    } else {
        cardMsg.innerHTML = 'Fields are required!';
        cardMsg.style.padding = '10px';
        cardMsg.style.color = 'red';
    }
});

function validateData(title, description) {
    return title !== '' && description !== '';
}

function createCard(title, description) {
    let bg = cardBgs[Math.floor(Math.random() * cardBgs.length)];
    while (bg === lastbg) {
        bg = cardBgs[Math.floor(Math.random() * cardBgs.length)];
    }
    console.log(bg)
    cardCounter++;
    let div = document.createElement('div');
    div.classList.add('rounded-lg', 'p-4', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-3',`bg-${bg}-200`);
    div.id = `card${cardCounter}`;

    let h3 = document.createElement('h3');
    h3.innerHTML = title;
    h3.className = 'font-bold text-2xl ' + `text-${bg}-500`;

    let p = document.createElement('p');
    p.innerHTML = description;
    p.className = 'font-light text-gray-100 text-center';

    let button = document.createElement('button');
    button.innerHTML = 'Discover'; // Fixed typo
    button.className = 'text-white font-normal px-10 py-2 cursor-pointer rounded-lg ' + `bg-${bg}-500`;

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);

    cardsContainer.appendChild(div);
    lastbg = bg;
    cardIds.push(`card${cardCounter}`);
    loadCards(maxItems);
}

function loadCards(maxItems) {
    for (let i = 0; i < cardIds.length; i++) {
        if (i >= maxItems) {
            document.getElementById(cardIds[i]).style.display = 'none';
        } else {
            document.getElementById(cardIds[i]).style.display = 'block';
        }
    }
    toggleLoadButtons();
}

function toggleLoadButtons() {
    if (maxItems >= cardIds.length) {
        loadMore.style.display = 'none';
        
    } else {
        loadMore.style.display = 'block';
    }
    if (maxItems <= 3 || maxItems<cardIds.length) {
        loadLess.style.display = 'none';
    } else {
        loadLess.style.display = 'block';
    }
}

loadMore.addEventListener('click', () => {
    maxItems += 3;
    loadCards(maxItems);
});

loadLess.addEventListener('click', () => {
        maxItems = 3;
        loadCards(maxItems);
});

