/**
 * DonatorLightbox
 */

function Donator_Object_Lightbox () {
	this._control = jQuery('.Donator_LightboxLink');
	this._video = '';
}

Donator_Object_Lightbox.prototype = {
	/**
	* Initialized the video flow object
	*
	* @return undefined
	*/
	start: function() {
		this._control.click(function(){
			var video = this.dataset.video;
			var videoObj = new Donator_Object_Video(video);
			var video_content = videoObj.getVideoContent();
			
			jQuery(this).fancybox({
				maxWidth: document.width,
				minWidth: document.width - 100,
				maxHeight: document.height - 100,
				content: video_content,
				scrollOutside:true
			})
		});
	}
	
};
