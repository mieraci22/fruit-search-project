const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = fruit.filter(f => f.toLowerCase().includes(str.toLowerCase()));
    return results;
}


function searchHandler(e) {
    const inputVal = e.target.value;
    const filteredFruits = search(inputVal);

    showSuggestions(filteredFruits, inputVal);
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = ''; // Clear previous suggestions
    if (results.length > 0 && inputVal !== '') {
        const suggestionsList = results.map(r => `<li>${r}</li>`).join('');
        suggestions.innerHTML = `<ul>${suggestionsList}</ul>`;
    }
}
function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.innerHTML = ''; // Clear suggestions
    }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);