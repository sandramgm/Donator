/**
* DONATOR
*
* @fileoverview Donator video, this element controls de video object for Donator actions
*
* @version $Id DonatorVideo.js $
* @category Donator Video
* @package Element
* @copyright (c) Copyright Donator World S.L.
* @author Sandra MGM
*/

function Donator_Object_Video (video, videoLink) {
	this._status = 'inactive';
	this._settings = {
		src_webm: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ video +'.webm',
		src_mp4: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ video +'.mp4',
		placeholder: jQuery('.video-wrp'),
		infoPlaceholder: jQuery('.video-info'),
		contentPlaceholder: jQuery('.video-lightbox'),
		videoLink: videoLink,
		player:null
	};
}

Donator_Object_Video.prototype = {
	/**
	 * Contruct the html5 video element
	 * */
	videoHTML: function() {
		var html;
		html =  '<video preload="none">' +
				'	<source type="video/webm" src="'+ this._settings.src_webm +'"/>' +
				'	<source type="video/mp4" src="'+ this._settings.src_mp4 +'"/>' +
				'</video>';
		
		this._settings.placeholder.append(html);
		
		jQuery(this._settings.placeholder).flowplayer({ 
			seeking: false
		});
		this._settings.player = flowplayer();
	},
	
	showLightbox: function() {
		/**
		 * Show video content on a lightbox
		 * */
		this._settings.videoLink.fancybox({
			maxWidth: document.width,
			minWidth: document.width - 100,
			maxHeight: document.height - 100,
		       width: 700,
		       height: 500,
		    content: this.videoHTML(),
			scrollOutside:true
		});
		
		/*jQuery('.fancybox-overlay').blur(function() {
			  alert('Handler for .blur() called.');
		});*/
		//this.activeTab();
	},

	
};