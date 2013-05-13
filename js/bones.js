$(document).ready(function(){
	
	responsiveSlide = false;
	
	$('body').click(function(e){
		var target = $(e.target);
		
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
		
	});
	
	
});
