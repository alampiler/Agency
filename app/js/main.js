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

});