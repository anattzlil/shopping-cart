// an array with all of our cart items
var cart = {
  cartItem: [
  ]
};


var $cart = $('.cart-list');

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
 
  // console.log(cart.cartItem);
  if(cart.cartItem.length != 0){
    $cart.empty();
  var source = $('#template').html();
  var template = Handlebars.compile(source);  
  var newHTML = template(cart);
  $('.cart-list').append(newHTML);
    var total = function(){
      var sum = 0;
      for (var i = 0; i < cart.cartItem.length; i++){
        sum += cart.cartItem[i].price;
      }
      $('.total').html(sum);
    }
    total();
  }else {
    $cart.empty();
    $('.total').html(0);
  }
}

var addItem = function (item) {
  cart.cartItem.push(item);
  console.log(cart);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart.cartItem = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var itemName = $(this).closest('.item').data().name;
  var price = $(this).closest('.item').data().price;
  var item = {
    itemName: itemName,
    price: price
  }
  console.log(itemName, price);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
// updateCart();
