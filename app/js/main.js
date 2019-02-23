$(document).ready(function() {

    $('div.product_selector_panel div.panel').click(function () {
        let tab_id = $(this).attr('data-tab');

        $('div.product_selector_panel div.panel').removeClass('active');
        $('div.product_selector_content div.content').removeClass('active');

        $(this).addClass('active');
        $('#'+tab_id).addClass('active');
    });

  var width = $(document).width();
  if(width <= 871){
    $('.ie').css('display', 'none');
    $('.getInTouch_conInfo').css('display', 'block');
  }
  else if(width >= 871){
    $('.ie').css('display', 'block');
  }


  $("a[href*='#']").on("click", function(e){
    let this_elem = $(this);
    $('html, body').stop().animate({
      scrollTop: $(this_elem.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });

  $(".order").on("click", function(e){
    let anchor = $("#presentation");
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });

});