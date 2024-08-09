const quantityNum1 = document.querySelector('#quantityNum1')
const quantityNum2 = document.querySelector('#quantityNum2')
const shopping__total = document.querySelector('.shopping__total')
const shopping__subtotal = document.querySelector('.shopping__subtotal')

function reloadPrice() {
  shopping__total.lastChild.textContent = 0
  for (let index = 0; index < document.querySelector('.shopping__items').children.length - 1; index++) {
    shopping__total.lastChild.textContent = (Number(shopping__total.lastChild.textContent) + Number(document.querySelector('.shopping__items').children[index].children[1].lastElementChild.children[0].value) * 300)
  }
  shopping__total.lastChild.textContent = "$" + shopping__total.lastChild.textContent
  shopping__subtotal.lastChild.textContent = shopping__total.lastChild.textContent

}

reloadPrice()

quantityNum1.addEventListener('change', () => {
  quantityNum1.value
  reloadPrice()
  loadCartItems()
})

quantityNum2.addEventListener('change', () => {
  quantityNum2.value
  reloadPrice()
  loadCartItems()
})

const shopping__items = document.querySelector('.shopping__items')

shopping__items.addEventListener('click', e => {
  if (e.target.classList[0] === "shopping__close") {
    // e.target.parentNode.style.display = 'none'
    e.target.parentNode.remove()
    loadCartItems()
    reloadPrice()
  } else if (e.target.classList[0] === "close") {
    // e.target.parentNode.parentNode.style.display = 'none'
    e.target.parentNode.parentNode.remove()
    loadCartItems()
    reloadPrice()
  }
})

const clearShoppingCart = document.querySelector('.clearShoppingCart')

clearShoppingCart.onclick = function () {
  for (let index = 0; index < document.querySelector('.shopping__items').children.length; index++) {
    if (document.querySelector('.shopping__items').children[index].className === "shopping__item") {
      document.querySelector('.shopping__items').children[index].style.display = 'none'
    }
    itemsInCart.textContent = 0
    shopping__total.lastChild.textContent = "$" + 0
    shopping__subtotal.lastChild.textContent = shopping__total.lastChild.textContent

  }
}

const itemsInCart = document.querySelector('.itemsInCart')

const loadCartItems = function () {
  itemsInCart.textContent = 0
  for (let index = 0; index < document.querySelector('.shopping__items').children.length - 1; index++) {
    itemsInCart.textContent = Number(itemsInCart.textContent) + Number(document.querySelector('.shopping__items').children[index].children[1].lastElementChild.children[0].value)
  }
  reloadPrice()
  localStorage.setItem('cartItems', loadCartItems)
  return localStorage.cartItems = itemsInCart.textContent

}
itemsInCart.textContent = localStorage.getItem('cartItems')
loadCartItems()
