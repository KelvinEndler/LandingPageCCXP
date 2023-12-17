function addRedBorder(id) {
    element = document.querySelector(`#${id})`);
    element.style.border = "5px solid red";
}

addRedBorder();

function highlightCard(cardId) {
    var element = document.querySelector(cardId);
    element.classList.toggle("card-highlight");
}

