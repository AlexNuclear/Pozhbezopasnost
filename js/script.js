
$(document).ready(function(){
  $('.slider').slick({
  	dots: false,
  	infinite: true,
  	speed: 300,
  	slidesToShow: 2,
  	slidesToScroll: 1,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><div class="flaticon-arrows-1"></div></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><div class="flaticon-arrows"></div></button>',
	  appendArrows: $('.arrows_attach'),

  	responsive: [
    	{
      		breakpoint: 1200,
      		settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	infinite: true,
        	dots: false
      	}
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});

$('.slider2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button type="button" data-role="none" class="slick-prev-2" aria-label="Previous" tabindex="0" role="button"><div class="flaticon-arrows-1"></div></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next-2" aria-label="Next" tabindex="0" role="button"><div class="flaticon-arrows"></div></button>',
  appendArrows: $('.arrows_attach-2'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).ready(function() {  
  
  /* Using custom settings */
  
  $("a#single_image").fancybox({
    openEffect : 'elastic',
    openSpeed : 150,

    closeEffect : 'elastic',
    closeSpeed : 150,
  });

});


$(".nav-item").each(function(){
    $( this ).bind('click',function(){
      $( this ).toggleClass("active");
      $( this ).children(".submenu").slideToggle(300);
  })
});


$(".navbar-toggler").bind('click',function(){
  if ($(".collapse").hasClass("collapsed")) {
    $(".collapse").fadeOut();
    $(".collapse").removeClass("collapsed");
  } else {
    $(".collapse").fadeIn();
    $(".collapse").addClass("collapsed");
  }
});



  $("#news-switcher").bind('change', function() {
    $(".news").toggle();
    $(".articles").toggle();

 })

  $(".navbar-toggler").bind('click',function() {
  	$(".navbar-toggler").toggleClass("burger-active");
  })

    $('.pin').bind('click',function(){
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  
  $('.button-down').bind('click.smoothscroll',function(){
    $('html, body').stop().animate({

      scrollTop:  $('#anchor').offset().top - 50 }, 'slow'
    );
});


$(document).ready(function(){

  $('.tab').bind('click', function(){
  $( '.tab' ).removeClass('active-tab');
  $('.tab-inner').removeClass('tab-inner-active');
  $( this ).addClass('active-tab');
  var i = $(this).parent('div').index();
  $('.tab-inner').each(function(){
    if($(this).index() == i){
      $(this).addClass('tab-inner-active');
    }
  })
  });
}); 




