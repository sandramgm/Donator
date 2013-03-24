var isActive, videoObj;

videoLink.click(function() {
    var campaign = jQuery(this).attr('data-campaign');
		
    /** 
     * Create new video object and open a lightbox 
     * */
    videoObj = createVideo(campaign);
 
    /**
     * Display lightbox with campaign details (video, info, ONGs)
     * */
    videoObj.showLightbox();
});

/**
* This functions are used to defermine if the browser tab is active or inactive
* */
window.addEventListener('focus', function() {
    if ((videoObj && videoObj._status != 'none') && videoObj._settings.player.playing == true) {
    	videoObj._status = 'active';
    }
	isActive = 'active';
    console.log(window.isActive);
});

window.addEventListener('blur', function() {
    if ((videoObj && videoObj._status != 'none') && videoObj._settings.player.playing == true) {
    	videoObj._status = 'inactive';
        videoObj._settings.player.pause(function() { console.log('pause'); });
    }
    isActive = 'inactive';
    console.log(window.isActive);
});

/** 
 * This method create the new Donator_Object_Video that will be used to displayed
 *  information of the campaign on a lightbox
 */
function createVideo(campaign) {
    return new Donator_Object_Video(campaign);
};
