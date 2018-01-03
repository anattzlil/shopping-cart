// an array with all of our cart items
var cart = {
  cartItem: [
  ]
};

var _findItemIndexByName = function (name) {
  for (var i = 0; i < cart.cartItem.length; i++) {
    if (name === cart.cartItem[i].itemName) {
      return i;
    }
  }
};

var findItem = function (item) {
  for (var i = 0; i < cart.cartItem.length; i++) {
    if (item.itemName === cart.cartItem[i].itemName) {
      return cart.cartItem[i];
    };
  } return null;
};

var $cart = $('.cart-list');

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.

  // console.log(cart.cartItem);
  if (cart.cartItem.length != 0) {
    $cart.empty();
    var source = $('#template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(cart);
    $('.cart-list').append(newHTML);
    total();
  } else {
    $cart.empty();
    $('.total').html(0);
  }
}

var total = function () {
  var sum = 0;
  for (var i = 0; i < cart.cartItem.length; i++) {
    sum += cart.cartItem[i].price * cart.cartItem[i].quant;
  }
  $('.total').html(sum);
}

var addItem = function (item) {
  var newItem = findItem(item);
  if (newItem) {
    newItem.quant += 1;
  } else {
    cart.cartItem.push(item);
  }
};

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart.cartItem = [];
  updateCart();
}

var removeItem = function (name) {
  var index = _findItemIndexByName(name);
  cart.cartItem.splice(index, 1);
};

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var itemName = $(this).closest('.item').data().name;
  var price = $(this).closest('.item').data().price;
  var item = {
    itemName: itemName,
    price: price,
    quant: 1
  }
  console.log(itemName, price);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.cart-list').on('click', '.removeBtn', function () {
  var name = $(this).siblings('.itemDescription').data().name;
  removeItem(name);
  updateCart();
});
// update the cart as soon as the page loads!
// updateCart();
