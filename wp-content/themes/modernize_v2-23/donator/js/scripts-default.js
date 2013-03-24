/*
jQuery(document).ready(function($) {
	$(".Donator_LightboxLink").fancybox({
		maxWidth: document.width,
		minWidth: document.width - 100,
		maxHeight: document.height - 100,
	       width: 700,
	       height: 500,
		scrollOutside:true
	});
});*/
/*
var lightbox = new Donator_Object_Lightbox;
lightbox.start();*/

/*
(function($) {  
	$('.Donator_LightboxLink').click(function() {
		var campaign = this.attr('data-video');
		alert(campaign);
	}); 

	var videoObj = new Donator_Object_Video;
	
})(jQuery);*/

//jQuery(document).ready(function($) {
	// Inside of this function, $() will work as an alias for jQuery()
	// and other libraries also using $ will not be accessible under this shortcut

var videoLink = jQuery('.Donator_LightboxLink');
var isActive, videoObj;

videoLink.click(function() {
  var campaign = jQuery(this).attr('data-campaign');
		
  /** Create new video object and open a lightbox */
  videoObj = createVideo(campaign, videoLink);
  videoObj.showLightbox();
  
/*  isActive = true;
  console.log(window.isActive? 'active OK' : 'inactive NO') ;*/
  
  //jQuery('#other-pause').onclick(videoObj._settings.player.pause());
  
});

/**
* This functions are used to defermine if the browser tab is active or inactive
* */
window.addEventListener('focus', function() {
	isActive = true;
});

window.addEventListener('blur', function() {
	isActive = false;
	videoObj._settings.player.pause();
	//jQuery(".flowplayer").pause();
});

setInterval(function () { console.log(window.isActive? 'active' : 'inactive') ; }, 1000);


/** 
 * This method create the new Donator_Object_Video that will be used to displayed
 *  information of the campaign on a lightbox
 */
function createVideo(campaign, videoLink) {
	return new Donator_Object_Video(campaign, videoLink);
};
	
//});