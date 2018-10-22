$(function() {
	var reaction = $('.reacts'),
		like = $('.like');
	reaction.addClass('show');
	like.on('click',function() {
		if(reaction.hasClass('show')) {
			reaction.css({
				'display':'none',
			});
			reaction.removeClass('show');
		}
		else {
			reaction.css({
				'display':'flex',
			});
			reaction.addClass('show');
		}
	});
});