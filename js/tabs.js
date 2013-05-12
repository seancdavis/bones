$(document).ready(function(){
	$('.tabs li').click(function(){
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('data-tab');
		$('.tab-content').each(function(){
			if( $(this).attr('data-tab') != tab ) $(this).hide();
			else $(this).show();
		});
	});
});
