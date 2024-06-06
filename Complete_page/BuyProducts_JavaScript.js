let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listofCard = document.querySelector('.listofCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'SriLankan Mask',
        image: 'SriLAnkanMask.JPG',
        price: 700
    },
    {
        id: 2,
        name: 'Batik Cloths',
        image: 'BatikCloths.JPEG',
        price: 2000
    },
    {
        id: 3,
        name: 'Elephant Craft',
        image: 'Craft.JPG',
        price: 3000
    },
    {
        id: 4,
        name: 'Handmade Pots',
        image: 'Art.JPEG',
        price: 2500
    },
    {
        id: 5,
        name: 'Wooden Spoon',
        image: 'WoodenSpoon.JPG',
        price: 300
    },
    {
        id: 6,
        
        name: 'Honey',
        image: 'Honey.JPEG',
        price: 1000
    }
];
let listofCards  = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="BuyProducts_Images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listofCards[key] == null){
        // copy product form list to list card
        listofCards[key] = JSON.parse(JSON.stringify(products[key]));
        listofCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listofCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listofCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="BuyProducts_Images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listofCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listofCards[key];
    }else{
        listofCards[key].quantity = quantity;
        listofCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

