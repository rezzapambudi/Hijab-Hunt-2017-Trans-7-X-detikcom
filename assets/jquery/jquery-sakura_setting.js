$('#off').hide();
$('#on').click(
	function(){
		$('body').sakura('start',{
			className: 'sakura', 
			fallSpeed:2, 
			maxSize: 48, 
			minSize: 4, 
			newOn: 50, 
			swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8']
		});
		$(this).hide();
		$('#off').show();
	}
);
$('#off').click(
	function(){
		$('body').sakura('stop');
		$(this).hide();
		$('#on').show();
	}
);