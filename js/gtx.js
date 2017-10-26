$(function(){
	$('.mobilesearchtoggle').bind('click', function(){
		$('.column_search').fadeToggle();
	});
	
	var section;
	
	$('.firstlevel .mobile_shopmenu a').bind('click', function(){
		$('.mobile_menu').removeClass('first');
		$('.mobile_menu').addClass('second');
		section = $(this).attr('data-section');
		$('.mobile_secondmenu li').removeClass('active');
		$('.mobile_secondmenu li[data-section="'+section+'"]').addClass('active');
	});
	
	$('.secondlevel .menuhead p').bind('click', function(){
		$('.mobile_menu').removeClass('second');
		$('.mobile_menu').addClass('first');
	});
	
	$('.mobile_menu .closemenu').bind('click', function(){
		$('.mobile_menu').removeClass('second');
		$('.mobile_menu').addClass('first');
		$('.mobile_menu').fadeOut();
	});
	
	$('.mobile_menutoggle').bind('click', function(){
		$('.mobile_menu').fadeIn();
	});
	
	$('.gtmodal').bind('click', function(){
		var modal = $(this).attr('data-modal');
		$('.lightbox_bg[data-modal="'+modal+'"]').fadeIn();
		if($('.lightbox_bg[data-modal="'+modal+'"]').find('.slider').length > 0){
			$('.lightbox_bg[data-modal="'+modal+'"]').find('.slider').slick({
				nextArrow: '<button class="slider-next"><i class="flaticon-right"></i></button>',
				prevArrow: '<button class="slider-prev"><i class="flaticon-left"></i></button>',
			});
		}
	});
	
	$('.lw_close').bind('click', function(){
		$(this).parents('.lightbox_bg').fadeOut();
		if($(this).parents('.lightbox_bg').find('.slider').length > 0){
			$(this).parents('.lightbox_bg').find('.slider').slick('unslick');
		}
	});
	
	$('.menu .has_submenu > a').bind('click', function(event){
		event.preventDefault();
		$(this).siblings('ul').slideDown();
		$(this).parents('li').siblings('li').find('ul').slideUp();
	})
	
	$('.block_picture_detail').slick({
		arrows: false,
		autoplay: true
	});
	
	
	$('.small_slider_other_products .slider_box').slick({
		nextArrow: '<div class="button_move_next" data-item="button_move_next" style="display: block;"></div>',
		prevArrow: '<div class="button_move_prev" data-item="button_move_prev" style="display: block;"></div>',
		appendArrows: $('.slider_box'),
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				}
			}
		]
	});
	$('.flaticon-list-search').bind('click', function(){
		$(".list-search").slideDown();
	})



	$('.product_tabs_info').activate_block_tabs({'show_tab':0});
	
	$('.tabactivate').bind('click', function(){
		if($(this).parent('div').hasClass('active')){
			$(this).siblings('.tab_inner').slideUp();
			$(this).parent('div').removeClass('active');
		}else{
			$(this).parent('div').siblings('div').find('.tab_inner').slideUp();
			$(this).siblings('.tab_inner').slideDown();
			$(this).parent('div').siblings('div').removeClass('active');
			$(this).parent('div').addClass('active');
		}
	});
})

