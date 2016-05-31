$(document).ready(function() {
  $('code').click(function() {
    $(this).parent().toggleClass('active');
    $(this).toggleClass('active');
  });

  addCollapsible();

  $(window).resize(function(i) {
    addCollapsible();
  });
});

function addCollapsible() {
  $('.highlight > code').each(function(i) {
    var overflowing = overflow($(this)[0].offsetHeight, $(this)[0].scrollHeight);
    $(this).toggleClass('overflow-active', overflowing);
  });
}

function overflow(offsetHeight, scrollHeight) {
  return scrollHeight > offsetHeight ? true : false;
}