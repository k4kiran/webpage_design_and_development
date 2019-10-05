// ===========  GLOBAL ============ //
  
// ===========  CREATE ROW ============ //

function createProduct(start,end){
  var productPage = "";
  var productPageFull = "";
    for(var prodItem = start ; prodItem < end; prodItem++)
    {
      var productImage = '<figure><img src="' + myProducts[prodItem].imageUrl + '" alt="product image"></figure>';
      var productTitle = '<p class="itemtitle">' + myProducts[prodItem].itemTitle + '</p>';
      var productSubTitle = '<p class="itemsubtitle">' + myProducts[prodItem].itemCategory + '</p>';
      var productPrice = '<p class="itemprice text-danger">$' + myProducts[prodItem].itemPrice2 + '</p>';
      var productdescription = '<p class="describe">' + myProducts[prodItem].description + '</p>';
      var addcart = '<button type="button" class="cartbutton">ADD TO CART</button>';
      var wishlist = '<i class="fa fa-heart mt-3 mb-3 wishlists" aria-hidden="true">&nbsp;Add To Wishlist</i>' + '</br><i class="fas fa-layer-group comparing" aria-hidden="true">&nbsp;Compare</i>'
      productPage =  '<div class="col1 shadow2" id="item' + prodItem + '"><div class="image"><a href="#">' + productImage + '</div><div class="content">' + productTitle + productSubTitle + productPrice + productdescription + addcart + wishlist + '</div></a></div>';
      productPageFull += productPage; 
    } 
    $("#fillproduct").html(productPageFull);
}
  
// ===========  List View ============ //

function listView()
{
  $("#fillproduct").removeClass("normal");
  $("#fillproduct").removeClass("grid");
  $("#fillproduct").addClass("list");
}

// ===========  Grid View ============ //

function gridView()
{
  $("#fillproduct").removeClass("normal");
  $("#fillproduct").removeClass("list");
  $("#fillproduct").addClass("grid");
}

// ===========  CHANGE PRICERANGE ============ //

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 25,
      max: 300,
      values: [ 25 , 181 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

// ===========  FILTER ITEMS ============ //

function filterItem(){
  var slide1 = $('#slider-range').slider("values")[0];
  var slide2 = $('#slider-range').slider("values")[1];
  for(var prodItem = 0 ; prodItem < 12; prodItem++)
  {
    var filter1 = "#item" + prodItem;
    $(filter1).css("display","block");
    if((myProducts[prodItem].itemPrice2 < slide1) || (myProducts[prodItem].itemPrice2 > slide2))
    {
      $(filter1).css("display","none");
    }
  }
}

// ===========  CATEGORY FILTER ============ //

$(".filtersection li").click(function(event){
  event.preventDefault();
  console.log(this);
});


// ===========  PAGINATION ============ //

$(".page1").click(function(event){
  event.preventDefault();
  createProduct(0,12);
});
$(".page2").click(function(event){
  event.preventDefault();
  createProduct(12,24);
});
$(".page3").click(function(event){
  event.preventDefault();
  createProduct(24,36);
});
$(".next").click(function(){
  createProduct(36,40);
});

// ===========  DOCUMENT READY ============ //

$(document).ready(function(){
createProduct(0,12);
$(".ui-state-default").addClass("myui");
$(".ui-slider-range").addClass("slidermiddle");

console.log($(".itemprice > a").text());
});