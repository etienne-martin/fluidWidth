$.fn.fluidWidth = function() {
	
	$(this.selector).each(function(){
		
		var video = $(this);
		var videoWidth = video.width();
		var videoHeight = video.height();
		
		if( video.closest(".fluidWidthHolder").length !== 0 ){
			return true;
		}
		
		var canvas = document.createElement('canvas');
			canvas.width = videoWidth;
			canvas.height = videoHeight;
		
		var pngUrl = canvas.toDataURL(); 
		
		video.wrap("<div class='fluidWidthHolder'></div>");
		
		var videoHolder = video.closest(".fluidWidthHolder");
		
		videoHolder.append("<img src='"+pngUrl+"' width='"+videoWidth+"' height='"+videoHeight+"'/>");
		
	});
	
}
