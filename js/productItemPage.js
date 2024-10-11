
fetch("js/items.json")
    .then(respose => respose.json())
    .then(data => {
        const swiper_items_sale = document.getElementById("swiper_items_sale");
        all_products_json = data;
        data.forEach(product => {
            all_products_json = data;
            if(product.old_price){
                const persent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
                swiper_items_sale.innerHTML += `
                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onClick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span> 
                            <span><i class="fa-solid fa-heart"></i></span> 
                            <span><i class="fa-solid fa-share"></i></span> 
                        </div>
                        <span class="sale_persent">%${persent_disc}</span>
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img src="${product.img_hover}" class="img_hover" alt="">
                        </div>
                        <h3 class="name_product">
                            <a href="productItemPage.html?productId=${product.id}">${product.name}</a>
                        </h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                    </div>
                `
            }
            
    });

    getProductIdFromUrl();

})


function getProductIdFromUrl(){
    const url_params = new URLSearchParams(window.location.search);
    let productId = url_params.get("productId");
    if(productId) {
        console.log(all_products_json);
        viewProduct(all_products_json[productId]); // Call viewProduct after data is loaded
    }
}

    
function viewProduct(product){
    const item_detail = document.querySelector(".item_detail");
    let productItem  = "";
    productItem = `
        <div class="container">
                <div class="img_item">
                    <div class="big_img">
                        <img id="bigImg" src="${product.img}" alt="">
                    </div>
                    <div class="sm_imgs">
                        <img onclick="changeItemImg('${product.img_hover}')" src="${product.img_hover}" alt="">
                        <img onclick="changeItemImg('${product.img}')" src="${product.img}" alt="">
                        <img onclick="changeItemImg('${product.img_hover}')" src="${product.img_hover}" alt="">
                        <img onclick="changeItemImg('${product.img}')" src="${product.img}" alt="">
                    </div>
                </div>
            <div class="details_item">
                <h1 class="name">${product.name}</h1>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <div class="price">
                    <p><span>$${product.price}</span></p>
                    <p class="old_price">$${product.old_price}</p>
                </div>
                <h5>Availability: <span>In Stock</span></h5>
                <h5>SKU: <span> Samsung C49J89: $875, Debenhams Plus</span></h5>
                <p class="text_p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis sapiente assumenda, asperiores perspiciatis error,
                    architecto corporis deleniti debitis voluptate in reiciendis?
                    Reiciendis incidunt ratione iusto culpa, voluptate quisquam aspernatur corporis odit temporibus quas sequi recusandae,
                    rem ipsa in voluptatibus. Consequuntur, odio laborum quaerat quisquam pariatur esse.
                    Ducimus dolore velit quisquam!
                </p>
                <h4>Hurry Up! only 98 products left in stock</h4>
                <button onclick="addToCart(0,this)" id="productAddBtn">add to cart <i class="fa-solid fa-cart-arrow-down"></i></button>
                <div class="icons">
                    <span><i class="fa-regular fa-heart"></i></span>
                    <span><i class="fa-solid fa-sliders"></i></span>
                    <span><i class="fa-solid fa-print"></i></span>
                    <span><i class="fa-solid fa-share-nodes"></i></span>
                </div>
            </div>
        </div>`
    item_detail.innerHTML = productItem;
}

function changeItemImg(img){
    let bigImg = document.getElementById("bigImg");
    bigImg.src = img;
}