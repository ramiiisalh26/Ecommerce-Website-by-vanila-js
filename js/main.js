// open and close Cart

const cart = document.querySelector('.cart');

function open_cart(){
    cart.classList.add("active");
}

function close_cart(){
    cart.classList.remove("active");
}

// open and close menu 

const menu = document.getElementById('menu');

function open_menu(){
    menu.classList.add("active");
}

function close_menu(){
    menu.classList.remove("active");
}

// add items in Cart

var all_products_json;

var items_in_cart = document.querySelector(".items_in_cart");
let price_cart_head = document.querySelector(".price_cart_head");
let count_item = document.querySelector(".count_item");
let innerItemCart = document.getElementById("innerItemCart");
let price_cart_total = document.querySelector(".price_cart_total");



let product_cart = [];
let total_price = 0;
let count = 0;

function addToCart(id,btn){
    count++;
    product_cart.push(all_products_json[id]);
    count_item.innerText = count;
    total_price += all_products_json[id].price;
    price_cart_head.innerText = "$" + total_price;
    innerItemCart.innerText = `(${count} Item in cart)`;    
    price_cart_total.innerText = `$ ${total_price}`
    btn.classList.add("active");
    get_cart_item();
}

function get_cart_item(){
    let item = "";
    for (let index = 0; index < product_cart.length; index++) {    
            item += `
                <div class="item_cart">
                    <img src="${product_cart[index].img}" alt="">
                    <div class="content">
                        <h4>${product_cart[index].name}</h4>
                        <p class="price_cart">$${product_cart[index].price}</p>
                    </div>
                    <button class="delete_item" onclick="delete_from_cart(${index})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `
    }    
    items_in_cart.innerHTML = item;
}

function delete_from_cart(idx){
    console.log(idx);
    count--;
    count_item.innerText = count;
    total_price -= product_cart[idx].price;
    price_cart_head.innerText = `$ ${total_price}`;
    price_cart_total.innerText = `$ ${total_price}`
    innerItemCart.innerText = `(${count} Item in cart)`;    
    product_cart.splice(idx,1);
    get_cart_item();

    let addToCartButton = document.querySelectorAll(".fa-cart-plus");
    let productAddBtn = document.getElementById("productAddBtn");
    if(productAddBtn != null){
        productAddBtn.classList.remove("active");
    }    
    for (let i = 0; i < addToCartButton.length; i++) {

        addToCartButton[i].classList.remove("active");

        product_cart.forEach((product)=>{
            if(product.id == i){
                addToCartButton[i].classList.add("active");
            }
        })
    }
    console.log(addToCartButton[idx])
}

// back to Top

let back_to_top = document.querySelector(".back_to_top");

back_to_top.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


// Change item image



