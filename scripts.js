let foodSelected;
let drinkSelected;
let desertSelected;
let foodPrice;
let drinkPrice;
let desertPrice;
let username;
let address;

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

function Whatsapp () {

    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${foodSelected.querySelector(".name").innerText}\n- Bebida: ${drinkSelected.querySelector(".name").innerText}\n- Sobremesa: ${desertSelected.querySelector(".name").innerText}\nTotal: R$ ${total.toFixed(2)}\n\nNome: ${username}\nEndereço: ${address}`;
    let link = "https://wa.me/5519981266625?text=" + encodeURIComponent(message);

    window.location = link;
}


function Order () {

    username = prompt("Digite seu nome:");
    address = prompt("Digite seu endereço:");

    const background = document.querySelector(".blur-background");
    background.classList.remove("hide")
    const panel = document.querySelector(".confirm-order");
    panel.classList.remove("hide")

    const order = document.querySelector(".order");

    order.innerHTML = order.innerHTML
        .replace("{Food}", foodSelected.querySelector(".name").innerText)
        .replace("{Drink}", drinkSelected.querySelector(".name").innerText)
        .replace("{Desert}", desertSelected.querySelector(".name").innerText)
        .replace("{FoodPrice}", foodSelected.querySelector(".price").innerText.replace("R$ ", ""))
        .replace("{DrinkPrice}", drinkSelected.querySelector(".price").innerText.replace("R$ ", ""))
        .replace("{DesertPrice}", desertSelected.querySelector(".price").innerText.replace("R$ ", ""))
        .replace("{TotalPrice}", String(total.toFixed(2)).replace(".", ","));
}
