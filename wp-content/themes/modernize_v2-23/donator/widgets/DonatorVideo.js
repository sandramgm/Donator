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

function Donator_Object_Video (campaign) {
	this._status = 'inactive';
	this._analytics = "UA-38607035-1";
	this._settings = {
		campaign:campaign,
		//src_webm: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ campaign +'.webm',
		//src_mp4: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ campaign +'.mp4',
		
		src_webm: 'http://stream.flowplayer.org/black/470x250.webm',
		src_mp4: 'http://stream.flowplayer.org/black/470x250.mp4',
		
		placeholder: jQuery('#Donator_video'),
		contentPlaceholder: jQuery('#Donator_video_lightbox'),
		ongPlaceholder: jQuery('#Donator_ONGs'),
		
		videoLink: jQuery('.Donator_LightboxLink');,
		player:null,
		interval:null
	};
}

Donator_Object_Video.prototype = {
	/**
	 * Contruct the html5 video element
	 * */
	videoHTML: function() {
		var self = this;
		
		var html;
		html =  '<div class="video-wrp flowplayer main minimalist">' +
			    '    <video preload="none">' +
				'	    <source type="video/webm" src="'+ this._settings.src_webm +'"/>' +
				'	    <source type="video/mp4" src="'+ this._settings.src_mp4 +'"/>' +
				'    </video> ' +
				'</div>';
		
		this._settings.placeholder.html(html);
		
		jQuery('.video-wrp', this._settings.placeholder).flowplayer({
			analytics: self._analytics,
			splash: true,
			keyboard: false
		});
		
		this._settings.player = jQuery('.video-wrp', this._settings.placeholder).flowplayer();
		
		/* This code is needed to disable the seeking functionality */
        jQuery(".fp-timeline").unbind("mousedown touchstart");
        jQuery(".flowplayer").removeClass("is-touch");
        
        this._settings.player.bind("finish", function(){
        	self.videoFinished();
        });
	},
	
	/**
	 * Generates the html code for the list of ONGs available for the campaign
	 * */
	ongHTML: function() {
		var self = this;
		var html = '<li class="ong"><a href="">PALLAPUPAS</li>' +
		    '<li class="ong">MÉDICOS SIN FRONTERAS</li>' +
		    '<li class="ong">SPAM</li>'; 
		
		
	},
	
	/**
	 * Show video content on a lightbox
	 * */
	showLightbox: function() {
		var self = this;
		
		this.videoHTML();
		
		this._settings.videoLink.fancybox({
			maxWidth: document.width,
			minWidth: document.width - 100,
			maxHeight: document.height - 100,
		       width: 700,
		       height: 500,
		    content: self._settings.contentPlaceholder,
			scrollOutside:true,
			afterClose : function() {
		        self.reset(); 
		        return;
		    }
		});
	},
	
	videoFinished: function() {
		if(this._settings.player.finished) {
			console.log('VIDEO FINISHED');
		}
	},
	
	showSamePage: function() {
		
	},
	
	reset: function() {
		if(this._settings) this._settings.placeholder.empty();
		this._settings = null;
		this._status = 'none';
	}

	
};