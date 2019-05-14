$(document).ready(function() {

    $('.about_images .about_image_block').click(function () {
        let tab_id = $(this).attr('data-panel');

        $('.about_container .about_container_image').removeClass('active');
        $('.about_content_menu .about_menu').removeClass('active');

        $('.'+tab_id).addClass('active');
    });

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

    function scrollBottom(elem){
        $('html, body').stop().animate({
            scrollTop: $(elem).offset().top
        }, 777);
    }


    $(".contact_btn").on("click", function(){
        let anchor = $(".footer");
        scrollBottom(anchor);
    });

    $(".learn_btn").on("click", function(){
        let anchor = $(".portfolio");
        scrollBottom(anchor);
    });

});