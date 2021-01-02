//Pizza Fillter 
let filterBtn = document.querySelectorAll('.opBtn')

filterBtn.forEach((event) => {
    event.addEventListener('click', () => {
        filterBtn.forEach((event) => {
            if (event.classList.contains('active')) {
                event.classList.remove('active')
            }
        })
        event.classList.add('active');
        pizzaFilter(event.innerHTML)
    })
})

const pizzaFilter = (type) => {
    console.log(type)
}

//add and remove to cart
let price = 0
let count = 0

let cart = document.querySelector('.price')
let addBtn = document.querySelectorAll('.addToCart')

addBtn.forEach((event) => {
    event.addEventListener('click', () => {
        pizzaPrice = Number(event.id);
        console.log(pizzaPrice)
        if (event.classList.contains('activeBtn')) {
            cartArr.pop(event.parentNode)
            event.classList.remove('activeBtn')
            count--;
            price -= pizzaPrice 
            event.innerHTML = '+ Добавить'
            render(cartArr)
        } else {
            cartArr.push(event.parentNode)
            event.classList.add('activeBtn')
            event.innerHTML = '- Убрать'
            count++;
            price += pizzaPrice
            render(cartArr)
        }
        cart.innerHTML = `${price} ₽ | <img class='cart_svg' src="../images/shopping-cart.svg" alt="cart"> ${count}`
    })
})

// logic
let cartArr = []
let modalBody = document.querySelector('.modal-body-content')
let content = document.querySelector('.main-content-wrapper')

const render = (cart) => {
    if (cartArr.length != 0) {
        modalBody.innerHTML = ''
        cart.map((item) => {
            modalBody.innerHTML += `<div class="pizza-item cart-pizza" id='p2'>
                <img src="../images/${item.querySelector('.pizza-img').id}.png" class="cart-img pizza-img" alt="фото пиццы">
                <div class="pizza-item-title cart-pizza-title">${item.querySelector('.pizza-item-title').id}
                    <br/><br/>
                    <div class="pizza-price" style='display: inline-block'>
                        от ${item.querySelector('.pizza-price').id} ₽
                    </div>
                    <button class="pizza-add-btn addToCart activeBtn" id='450'>- Убрать</button>
                </div>
                <div class="pizza-option">

                </div>
                
                
            </div>`
        })
    } else {
        modalBody.innerHTML = '<h4>Добавьте что-нибудь из меню</h4>'
    }    
}
