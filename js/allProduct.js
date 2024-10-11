
let filter = document.querySelector(".filter");

function open_close_filter(){
    filter.classList.toggle("active");
}

fetch("js/items.json")
    .then(respone => respone.json())
    .then(data => {

        all_products_json = data;
        
        const products_dev = document.getElementById("products_dev");
        data.forEach(product => {

                const persent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
                
                const mark_old_price = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "" ;
                const mark_persent_disc = product.old_price ?  `<span class="sale_persent">%${persent_disc}</span>` : "";
                
                products_dev.innerHTML += `
                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onClick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span> 
                            <span><i class="fa-solid fa-heart"></i></span> 
                            <span><i class="fa-solid fa-share"></i></span> 
                        </div>
                        ${mark_persent_disc}
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img src="${product.img_hover}" class="img_hover" alt="">
                        </div>
                        <h3 class="name_product">
                            <a href="productItemPage.html?productId=${product.id}" >${product.name}</a>
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
                            ${mark_old_price}
                        </div>
                    </div>
                `
        });

    })

    