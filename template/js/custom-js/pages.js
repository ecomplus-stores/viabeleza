// Add your custom JavaScript for storefront pages here.
$(".rastrear").click(function(i) {
  i.preventDefault();
  var t = "http://rastreie.com/" + $(".form-rastreio input").val();
  window.open(t, "blank")
})
