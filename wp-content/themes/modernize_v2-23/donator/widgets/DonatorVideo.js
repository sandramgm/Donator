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
		/*videoObj._settings.src_webm: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ campaign +'.webm',
		videoObj._settings.src_mp4: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ campaign +'.mp4',*/
		
		placeholder: jQuery('#Donator_video'),
		contentPlaceholder: jQuery('#Donator_video_lightbox'),
		ongPlaceholder: jQuery('#Donator_ONGs'),
		
		videoLink: jQuery('.Donator_LightboxLink'),
		player:null,
		interval:null
	};
}

Donator_Object_Video.prototype = {
	/**
	 * Generates the html5 video element
	 * */
	videoHTML: function() {
		var self = this;
		
		var videoHTML = this.videoHTMLcode();
		this._settings.placeholder.html(videoHTML);
		
		var ongHTMLoriginal = this.ongHTMLoriginal();
		this._settings.ongPlaceholder.html(ongHTMLoriginal);
		
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
	 * Generates the html  for the video to be played
	 * */	
	videoHTMLcode: function() {
		var html;
		html =  '<div class="video-wrp flowplayer main minimalist">' +
			    '    <video preload="none">' +
				'	    <source type="video/webm" src="'+ this._settings.src_webm +'"/>' +
				'	    <source type="video/mp4" src="'+ this._settings.src_mp4 +'"/>' +
				'    </video> ' +
				'</div>';
		return html;
	},

	/**
	 * Generates the html  for the video to be played
	 * */	
	ongHTMLoriginal: function() {
		var html;
		html =  '<ul class="ong-list"> ' +
			'<li class="ong"><img src="/donator/images/ong/logo_pallapupas_gris.png"></li>' +
			'<li class="ong"><img src="/donator/images/ong/logo_refugi_mataro_gris.png"></li>' +
			'<li class="ong"><img src="/donator/images/ong/logo_sonrisas_bombay_gris.png"></li>' +
			'</ul>' + 
			'<span class="message">RECUERDA: Después de ver el vídeo selecciona la ONG con que desees colaborar!</span>';
		return html;
	},
	
	/**
	 * Generates the html code for the list of ONGs available for the campaign (ACTIVE)
	 * */
	ongHTML: function() {
		var self = this;
		var html = '<form><ul class="ong-list ong-active">' +
			    '<li class="ong"><a href=""><img src="/donator/images/ong/logo_pallapupas.png"></a></li>' +
			    '<li class="ong"><a href=""><img src="/donator/images/ong/logo_refugi_mataro.png"></a></li>' +
			    '<li class="ong"><a href=""><img src="/donator/images/ong/logo_sonrisas_bombay.png"></a></li>' +
		    '</ul></form>';
		
		this._settings.ongPlaceholder.html(html);
	},
	
	/**
	 * Show video content on a lightbox
	 * */
	showLightbox: function() {
		var self = this;
		var width = jQuery(window).width() - 100;
		var height = jQuery(window).height() - 100;
		
		if(donatorVideo.playing == true) {
			donatorVideo.pause();
		}
		
		this.videoHTML();
		
		this._settings.videoLink.fancybox({
			//maxWidth: document.width,
			//minWidth: document.width - 100,
			//maxHeight: document.height - 100,
		    minWidth: width,
		    minHeight: height,
		    content: self._settings.contentPlaceholder,
			scrollOutside:true,
			afterClose : function() {
		        self.reset(); 
		        return;
		    }
		});
	},
	
	videoFinished: function() {
		var self = this; 
		if(this._settings.player.finished) {
			console.log('VIDEO FINISHED');
			
			/* Add ONGs links */
			self.ongHTML();
		}
	},
	
	showSamePage: function() {
		
	},
	
	reset: function() {
		if(this._settings) {
			this._settings.placeholder.empty();
			this._settings.ongPlaceholder.empty();
		}
		this._settings = null;
		this._status = 'none';
	}

	
};