const add_cart = document.querySelectorAll(".add-cart");
const cart_item_list = document.querySelector(".cart-items");
const total_payment = document.querySelector(".final-pay");
let remove_cart_item = document.querySelectorAll(".cart-item-remove");

let single_item_price = document.querySelectorAll(".cart-item-currency");

let tl = 0;

let finalPayment = Number(total_payment.innerHTML);

for(let i = 0; i < single_item_price.length; i++) {
    tl += Number(single_item_price[i].innerHTML);
}

total_payment.innerHTML = tl;

const cart_item_count = document.querySelector(".item-counter");



let item_counter = Number(cart_item_count.innerHTML);
if(item_counter == 0 || item_counter == null) {
    cart_item_count.style.display = "none";
}


//adding item to cart
add_cart.forEach(function(btn) {
    btn.addEventListener('click', e => {

        //make sure that item is added only when the inner icon is clicked
        if(e.target.parentElement.classList.contains("add-cart")) {

            let selected_image_source = e.target.parentElement.previousElementSibling.src;

            let item_price = Number(e.target.parentElement.parentElement.nextElementSibling
            .children[1].children[0].children[0].textContent);
            

            let cart_item = document.createElement('li');
            cart_item.classList.add("cart-item");
            cart_item.classList.add("row");

            // console.log(cart_item);

            cart_item.innerHTML = `
            <div class="col-4">
            <img class="rounded-circle cart-image" src="${selected_image_source}" alt="">
            </div>
            <div class="col-4">
                <p class="cart-item-currency mb-0">${item_price}</p>
            </div>
            <div class="col-4">
                <button class="cart-item-remove mb-0" onclick="removeitem(event);"><i class="fas fa-trash-alt"></i></button>
            </div>
            `;
            
            cart_item_list.appendChild(cart_item);

            let finalPayment = Number(total_payment.innerHTML);
            finalPayment += item_price;
            total_payment.innerHTML = finalPayment;


            //increase item counter by one
            let number_of_item = document.querySelectorAll(".cart-items li");
            // console.log(number_of_item.length);
            cart_item_count.innerHTML = number_of_item.length;
            cart_item_count.style.display = "block";

        }
    })
});



//removing item from the cart
function removeitem(e) {
    if(e.target.parentElement.classList.contains("cart-item-remove")) {

        let item_to_remove = e.target.parentElement.parentElement.parentElement; 
        let removed_item_price = Number(e.target.parentElement.parentElement.previousElementSibling.children[0].innerHTML);
        // console.log(removed_item_price)
        cart_item_list.removeChild(item_to_remove);

        let number_of_item = document.querySelectorAll(".cart-items li");
        cart_item_count.innerHTML = number_of_item.length;
        cart_item_count.style.display = "block";

        
        let finalPayment = Number(total_payment.innerHTML);
        finalPayment -= removed_item_price;
        total_payment.innerHTML = finalPayment;
    }
}

let cart = document.querySelector(".cart");
document.querySelector(".cart-info").addEventListener("click", () => {
    if(cart.style.display == "none") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
})

let readmore = document.querySelector(".read-more");
let hidden_info = document.querySelector(".hidden-info");
let dotted_info = document.querySelector(".dotted-info");

hidden_info.style.display = "none";

readmore.addEventListener("click", () => {
    if(readmore.innerHTML == "Read More") {
        dotted_info.style.display = "none";
        hidden_info.style.display = "inline-block";
        readmore.innerHTML = "Read Less";
    } else {
        dotted_info.style.display = "inline-block";
        hidden_info.style.display = "none";
        readmore.innerHTML = "Read More";
    }
});


function is_touch_enabled() { 
    return ( 'ontouchstart' in window ) ||  
           ( navigator.maxTouchPoints > 0 ) ||  
           ( navigator.msMaxTouchPoints > 0 ); 
} 


if( is_touch_enabled() ) { 
    for(let i = 0; i < add_cart.length; i++) {
        add_cart[i].style.display = "block";
    }
} else { 
     
} 




