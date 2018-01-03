var renderCart = function(name, price, url) {
    var source = $('#add-item-template').html();
    var template = Handlebars.compile(source);  
    var newHTML = template({itemName: name, price: price, url: url});
    $('.row:last-child').append(newHTML);
};

$('.add-item-save').on('click', function() {
    var name = $('#add-item-name').val();
    var price = $('#add-item-price').val();
    var url = $('#add-item-image').val();
    renderCart(name, price, url);
});
