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
			// slides body
			$('body').animate({'left': '200px'}, 500 );
			// says body is slid out to right
			bonesResponsiveSlide = true 
		}
		else if( bonesResponsiveSlide == true && !target.is('.nav') ) {
			// slides body back to left
			$('body').animate({'left': '0'}, 500 );
			bonesResponsiveSlide = false;
		} // <-- RESPONSIVE NAVIGATION
		
		/* Tabs
		----------------------------------------- */
		if( target.is('.tabs li') ) {
			// class control for styling
			$('.tabs li').removeClass('active');
			$(target).addClass('active');
			// the tab to look for
			var tab = $(target).attr('data-tab');
			// steps through tab content section until finding the right one
			$('.tab-content').each(function(){
				if( $(this).attr('data-tab') != tab ) $(this).hide();
				else $(this).show();
			});
		} // <-- TABS
			
	} // <-- bonesClick() | OVERALL CLICK CONTROL
	
	/* Responsive Control for Window Resize
	----------------------------------------- */
	$(window).resize(function(){
		if( $('body').width() < 768 && bonesResponsiveSlide == true ) {
			// moves body back into place if it's out
			$('body').css('left', '0');
			bonesResponsiveSlide = false;
		}
	}); // <-- WINDOW RESIZE
	
	/* Tooltip
	----------------------------------------- */
	if( $('.tooltip').length > 0 ) {
		bonesTooltipHover = 0; // counter to help build page tooltip elements
		$('.tooltip').hover(function(){
			// iterative counter to build unique tooltip IDs				
			bonesTooltipHover++;
			// get the element's title and then hide it (temporarily)
			bonesTooltipContent = $(this).attr('title');
			$(this).attr('title', '');
			// create (iterative) custom ID for tooltip, then build the element
			bonesTooltipID = 'bones-tooltip-'+bonesTooltipHover;
			$('body').prepend('<div id="'+bonesTooltipID+'" class="bones-tooltip">'+bonesTooltipContent+'<div class="arrow-bottom"></div></div>');
			// calculations for determining where to position the tooltip
			var thisWidth = $(this).width();
			var tooltipWidth = $('#'+bonesTooltipID).width();
			var tooltipHeight = $('#'+bonesTooltipID).height();
			var tooltipLeft = $(this).offset().left + (thisWidth / 2) - (tooltipWidth / 2); 
			var tooltipTop = $(this).offset().top - tooltipHeight - 30;
			$('#'+bonesTooltipID).css({ 
				top : tooltipTop + 'px',
				left : tooltipLeft + 'px' 
			});
			// show tooltip
			$('#'+bonesTooltipID).fadeIn(300);
		}, function(){
			// hide and destroy tooltip (keeps markup clean)
			$('#'+bonesTooltipID).hide();
			$('#'+bonesTooltipID).remove();
			// replace title (for other applications and plugins that require it)
			$(this).attr('title', bonesTooltipContent);
		});
	} // <-- TOOLTIP
	
	/* Images
	----------------------------------------- */
	if( $('.crop').length > 0 ) {
		$('.crop').each(function(){
			var imgHeight = $(this).children('img').height();
			var divHeight = $(this).height();
			if( imgHeight < divHeight ) {
				$(this).children('img').css({
					'height': '100%',
					'width': 'auto',
				});
				var imgWidth = $(this).children('img').width();
				var divWidth = $(this).width();
				var imgLeft = (divWidth / 2) - (imgWidth / 2);
				$(this).children('img').css('left',imgLeft+'px');
			}
			else {
				var imgTop = (divHeight / 2) - (imgHeight / 2);
				$(this).children('img').css('top',imgTop+'px'); 				
			}
		});
	}
});




