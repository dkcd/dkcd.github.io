$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.collapse').collapse()

$(function() {

  $(".product").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    elementThatWasClicked.parent().remove();
  })

})