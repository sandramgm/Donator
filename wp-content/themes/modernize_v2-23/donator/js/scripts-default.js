var isActive, videoObj;
var videoLink = jQuery('.Donator_LightboxLink');
var donatorSplashImages = '/donator/images/splash/';
var videoDonator = null;

/*var test = "ESTO ES UNA PRUEBA";
jQuery('#donation-done').html(test);
jQuery('#donation-done').show('slow');
jQuery('#donation-done').addClass('testing');
jQuery('#donation-done').css('display','block');*/

var jsonDonatorCampaigns = "<?= $json_campaigns ?>";//"<?= $json_campaigns ?>';

var url = "<?php echo $donator_page; ?>";

//var url = "http://donator.es/nuestros-videos-2/#videoDonator";
var active_page = "http://donator.es/wp-content/themes/modernize_v2-23/donator/model.php";

/**
 * Sticky header, when user scrolls down the main navigation remains at the top all the time
 * */
var stickyHeader = jQuery('#donator-menu').offset().top;
jQuery(window).scroll(function(){
	if( jQuery(window).scrollTop() > stickyHeader ) {
		jQuery('#donator-menu').css({position: 'fixed', top: '0px'});
	} else {
		jQuery('#donator-menu').css({position: 'relative', top: '0px'});
	}
});

/** 
 * IF donator video is placed on the page it will be activate with this JS 
 * */
if (jQuery('.donator-video').length > 0) {
	videoDonator = createVideo('donator', jQuery('.content-wrp'), jQuery('.donator-video'), null, null, null);

	/*videoDonator._settings.placeholder = jQuery('.content-wrp');
	videoDonator._settings.videoPlaceholder = jQuery('.donator-video');*/
	
	videoDonator.activateVideoPlayer(jQuery(videoDonator._settings.videoPlaceholder, videoDonator._settings.placeholder));
	videoDonator._settings.player = jQuery(videoDonator._settings.videoPlaceholder, videoDonator._settings.placeholder).flowplayer();
}

videoLink.click(function() {
    var campaign = jQuery(this).attr('data-campaign');
		
    /** 
     * Create new video object and open a lightbox 
     * */
    videoObj = createVideo(campaign, jQuery('#Donator_video_lightbox'), jQuery('.video-wrp'), jQuery('#Donator_video_info'), jQuery('#Donator_ONGs'), jQuery('.Donator_LightboxLink'));

    //
    /*videoObj._settings.contentPlaceholder = jQuery('#Donator_video_lightbox');
    videoObj._settings.infoPlaceholder = jQuery('#Donator_video_info');
    videoObj._settings.ongPlaceholder = jQuery('#Donator_ONGs');
    videoObj._settings.videoLink = jQuery('.Donator_LightboxLink');*/
    
	if(campaign!=null){
		videoObj._settings.src_webm = 'http://donator.es/donator/videos/'+ campaign +'.webm';
		videoObj._settings.src_mp4 = 'http://donator.es/donator/videos/'+ campaign +'.mp4';
	} else {
		videoObj._settings.src_webm = 'http://stream.flowplayer.org/black/470x250.webm';
		videoObj._settings.src_mp4 = 'http://stream.flowplayer.org/black/470x250.mp4';
	}
    
    
    /**
     * Display lightbox with campaign details (video, info, ONGs)
     * */
    videoObj.showLightbox();
});

/**
* This functions are used to defermine if the browser tab is active or inactive
* */
/*
window.addEventListener('focus', function() {
    if ((videoObj && videoObj._status != 'none') && videoObj._settings.player.playing == true) {
    	videoObj._status = 'active';
    }
	isActive = 'active';
    console.log(window.isActive);
});*/

window.addEventListener('blur', function() {
    if ((videoObj && videoObj._status != 'none') && videoObj._settings.player.playing == true) {
    	videoObj._status = 'inactive';
        videoObj._settings.player.pause(function() { console.log('pause'); });
    }
    //isActive = 'inactive';
    //console.log(window.isActive);
});

/** 
 * This method create the new Donator_Object_Video that will be used to displayed
 *  information of the campaign on a lightbox
 */
function createVideo(campaign, contentPlaceholder, videoPlaceholder, infoPlaceholder, ongPlaceholder, videoLink) {
    return new Donator_Object_Video(campaign, contentPlaceholder, videoPlaceholder, infoPlaceholder, ongPlaceholder, videoLink);
};
