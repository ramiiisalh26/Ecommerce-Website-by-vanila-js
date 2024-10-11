fetch("js/items.json")
    .then(respone => respone.json())
    .then(data => {

        all_products_json = data;
        // let productId = getProductIdFromUrl();
        // if(productId) {
        //     viewProduct(all_products_json[productId]); // Call viewProduct after data is loaded
        // }
        const swiper_items_sale = document.getElementById("swiper_items_sale");
        const other_product_swiper = document.getElementById("other_product_swiper");
        const other_product_swiper_2 = document.getElementById("other_product_swiper_2");

        data.forEach(product => {
            if(product.old_price){
                const persent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
                console.log(product.id);
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
                            <a href="productItemPage.html?productId=${product.id}" id="productItem">${product.name}</a>
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

        data.forEach(product => {

            other_product_swiper.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onClick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span> 
                        <span><i class="fa-solid fa-heart"></i></span> 
                        <span><i class="fa-solid fa-share"></i></span> 
                    </div>
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
                    </div>
                </div>
            `
        });

        data.forEach(product => {

            other_product_swiper_2.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onClick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span> 
                        <span><i class="fa-solid fa-heart"></i></span> 
                        <span><i class="fa-solid fa-share"></i></span> 
                    </div>
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
                    </div>
                </div>
            `
        });

    })

    