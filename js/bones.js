$(document).ready(function(){
	
	// vars
	bonesResponsiveSlide = false;
	
	/* Overall Click Event for Body
	----------------------------------------- */
	$('body').click(function(e) {
		var target = $(e.target);
		bonesClick(target);
	});
	function bonesClick(target) {
		/* Responsive Navigation
		----------------------------------------- */
		if( target.is('.nav-toggle') && bonesResponsiveSlide == false) {
			$('body').animate({'left': '200px'}, 500 ); // slides body
			bonesResponsiveSlide = true // says body is slid out to right
		}
		else if( bonesResponsiveSlide == true && !target.is('.nav') ) {
			$('body').animate({'left': '0'}, 500 ); // slides body back to left
			bonesResponsiveSlide = false;
		}
		/* Tabs
		----------------------------------------- */
		if( target.is('.tabs li') ) {
			// class control for styling
			$('.tabs li').removeClass('active');
			$(target).addClass('active');
			var tab = $(target).attr('data-tab'); // the tab to look for
			// steps through tab content section until finding the right one
			$('.tab-content').each(function(){
				if( $(this).attr('data-tab') != tab ) $(this).hide();
				else $(this).show();
			});
		}
		
	}
	/* Responsive Control for Window Resize
	----------------------------------------- */
	$(window).resize(function(){
		if( $('body').width() < 768 && bonesResponsiveSlide == true ) {
			$('body').css('left', '0'); // moves body back into place if it's out
			bonesResponsiveSlide = false;
		}
	});
	/* Tooltip
	----------------------------------------- */
	if( $('.tooltip').length > 0 ) {
		$('body').prepend('<div id="bones-tooltip"></div>');
		$('.tooltip').hover(function(){
			bonesTooltipContent = $(this).attr('title');
			$(this).attr('title', '');
			$('#bones-tooltip').html( bonesTooltipContent + '<div class="arrow-bottom"></div>' );
			var thisWidth = $(this).width();
			var tooltipWidth = $('#bones-tooltip').width();
			var tooltipHeight = $('#bones-tooltip').height();
			
			var tooltipLeft = $(this).offset().left + (thisWidth / 2) - (tooltipWidth / 2); 
			var tooltipTop = $(this).offset().top - tooltipHeight - 30;
			
			$('#bones-tooltip').css({ 
				top : tooltipTop + 'px',
				left : tooltipLeft + 'px' 
			});
			$('#bones-tooltip').fadeIn();
		}, function(){
			$('#bones-tooltip').fadeOut();
			$(this).attr('title', bonesTooltipContent);
		});
	}
});




