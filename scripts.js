function selectFood (option) {

    const selectedbutton = document.querySelector(".food .selected");
    if (selectedbutton !== null) {
        selectedbutton.classList.remove("selected");
    }
    option.classList.toggle("selected");
}

function selectDrink (option) {

    const selectedbutton = document.querySelector(".drink .selected");
    if (selectedbutton !== null) {
        selectedbutton.classList.remove("selected");
    }
    option.classList.toggle("selected");
}

function selectDesert (option) {

    const selectedbutton = document.querySelector(".desert .selected");
    if (selectedbutton !== null) {
        selectedbutton.classList.remove("selected");
    }
    option.classList.toggle("selected");
}