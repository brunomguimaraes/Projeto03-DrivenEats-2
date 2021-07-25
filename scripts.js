let foodSelected;
let drinkSelected;
let desertSelected;
let foodPrice;
let drinkPrice;
let desertPrice;

function selectFood (option) {

    const selectedbutton = document.querySelector(".food .selected");
    if (selectedbutton !== null) {
        selectedbutton.classList.remove("selected");
    }
    option.classList.toggle("selected");
    foodSelected = option;
    foodPrice = document.querySelector(".food .selected .price").innerHTML;
    completeOrder();
}

function selectDrink (option) {

    const selectedbutton = document.querySelector(".drink .selected");
    if (selectedbutton !== null) {
        selectedbutton.classList.remove("selected");
    }
    option.classList.toggle("selected");
    drinkSelected = option;
    drinkPrice = document.querySelector(".drink .selected .price").innerHTML;
    completeOrder();
}

function selectDesert (option) {

    const selectedbutton = document.querySelector(".desert .selected");
    if (selectedbutton !== null) {
        selectedbutton.classList.remove("selected");
    }
    option.classList.toggle("selected");
    desertSelected = option;
    desertPrice = document.querySelector(".desert .selected .price").innerHTML;
    completeOrder();
}

function completeOrder () {

    if (foodSelected !== undefined && drinkSelected !== undefined && desertSelected !== undefined) {
        const orderButton = document.querySelector(".orderButton");

        orderButton.innerHTML = "Fechar pedido";
        orderButton.classList.remove("gray");
        orderButton.classList.add("orderSelected");

        foodPrice = Number(foodPrice.replace("R$ ", "").replace(",", "."));
        drinkPrice = Number(drinkPrice.replace("R$ ", "").replace(",", "."));
        desertPrice = Number(desertPrice.replace("R$ ", "").replace(",", "."));

        total = foodPrice + drinkPrice + desertPrice;
    }
}

function Whatsapp (button) {

    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${document.querySelector(".food .selected .name").innerText}\n- Bebida: ${document.querySelector(".drink .selected .name").innerText}\n- Sobremesa: ${document.querySelector(".desert .selected .name").innerText}\nTotal: R$ ${total}`;
    let link = "https://wa.me/5519981266625?text=" + encodeURIComponent(message);

    window.location = link;
}