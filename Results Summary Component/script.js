const summary_cards = document.querySelector(".summary-cards");

const categoryColors = {
    "Reaction": "hsla(0, 53.10%, 71.60%, 0.09)",
    "Memory": "hsla(39, 59.20%, 62.50%, 0.05)",
    "Verbal": "hsla(166, 56.80%, 61.00%, 0.06)",
    "Visual": "hsla(233, 46.50%, 47.60%, 0.05)"
};

const textColors = {
    "Reaction": "hsla(0, 73.20%, 64.90%, 0.89)",
    "Memory": "hsla(39, 65.90%, 57.50%, 0.93)",
    "Verbal": "hsla(166, 75.10%, 62.20%, 0.92)",
    "Visual": "hsla(233, 46.50%, 47.60%, 0.81)"
};

// function to read and processs the data.json 
async function loadSummaryCards() {
    try {
        const response = await fetch('data.json');
        if(!response.ok) {
            throw new Error("Error opening the json file");
        }

        const data = await response.json();

        // for each item, create an <div class="summary-card"/> and put in summary-cards div
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('summary-card');


            card.innerHTML = `
            <div class=category>
                <img src="${item.icon}" alt="${item.category}">
                <span>${item.category}</span>
            </div>
            <div class="score">
                <span class="score-text">${item.score}</span>
                <span class="perc-text">/ 100</span>
            </div>
            `;

            summary_cards.appendChild(card);

        });
    } catch (error) {
        console.log('Error', error);
    }
}

loadSummaryCards();