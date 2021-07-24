let foodSelected;
let drinkSelected;
let desertSelected;

function selectFood (option) {

    const selectedbutton = document.querySelector(".food .selected");
    if (selectedbutton !== null) {
        selectedbutton.classList.remove("selected");
    }
    option.classList.toggle("selected");
    foodSelected = option;
    completeOrder();
}

function selectDrink (option) {

    const selectedbutton = document.querySelector(".drink .selected");
    if (selectedbutton !== null) {
        selectedbutton.classList.remove("selected");
    }
    option.classList.toggle("selected");
    drinkSelected = option;
    completeOrder();
}

function selectDesert (option) {

    const selectedbutton = document.querySelector(".desert .selected");
    if (selectedbutton !== null) {
        selectedbutton.classList.remove("selected");
    }
    option.classList.toggle("selected");
    desertSelected = option;
    completeOrder();
}

function completeOrder () {

    if (foodSelected !== undefined && drinkSelected !== undefined && desertSelected !== undefined) {
        const orderButton = document.querySelector(".orderButton");

        orderButton.innerHTML = "Fechar pedido";
        orderButton.classList.remove("gray");
        orderButton.classList.add("orderSelected");
    }
}