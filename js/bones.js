$(document).ready(function(){
	
	// vars
	responsiveSlide = false;
	
	/* Overall Click Event for Body
	----------------------------------------- */
	$('body').click(function(e) {
		var target = $(e.target);
		bonesClick(target);
	});
	
	/* Responsive Control for Window Resize
	----------------------------------------- */
	$(window).resize(function(){
		if( $('body').width() < 767 ) {
			$('body').css('left', '0');
			responsiveSlide = false;
		}
	});
	
	function bonesClick(target) {
	
		/* Responsive Navigation
		----------------------------------------- */
		if( target.is('.nav-toggle') && responsiveSlide == false) {
			responsiveSlide = true
			$('body').animate({'left': '200px'}, 500 );
		}
		else if( responsiveSlide == true && !target.is('.nav') ) {
			responsiveSlide = false;
			$('body').animate({'left': '0'}, 500 );
		}
		
		/* Tabs
		----------------------------------------- */
		if( target.is('.tabs li') ) {
			$('.tabs li').removeClass('active');
			$(target).addClass('active');
			var tab = $(target).attr('data-tab');
			$('.tab-content').each(function(){
				if( $(this).attr('data-tab') != tab ) $(this).hide();
				else $(this).show();
			});
		}
		
	}
});
