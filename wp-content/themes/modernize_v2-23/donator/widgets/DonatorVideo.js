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

function Donator_Object_Video (campaign, contentPlaceholder, videoPlaceholder, infoPlaceholder, ongPlaceholder, videoLink) {
	this._status = 'inactive';
	this._analytics = "UA-38607035-1";
	this._settings = {
		campaign:campaign,
		id_campaign:1,
		/*videoObj._settings.src_webm: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ campaign +'.webm',
		videoObj._settings.src_mp4: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ campaign +'.mp4',*/
		
		placeholder: jQuery('#Donator_video'),
		//videoPlaceholder: jQuery('.video-wrp'),
		videoPlaceholder: videoPlaceholder,
		splashImage: donatorSplashImages + campaign + '-video-splash.png',
		contentPlaceholder: contentPlaceholder,
		infoPlaceholder: infoPlaceholder,
		ongPlaceholder: ongPlaceholder,
		videoLink: videoLink,
		messagePlaceholder: jQuery('#donation-done'),
		
		/*contentPlaceholder: jQuery('#Donator_video_lightbox'),
		infoPlaceholder:jQuery('#Donator_video_info'),
		ongPlaceholder: jQuery('#Donator_ONGs'),
		videoLink: jQuery('.Donator_LightboxLink'),*/

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
		
		var infoHTML = this.infoHTML(this._settings.campaign);
		this._settings.infoPlaceholder.html(infoHTML);
		
		this.activateVideoPlayer(jQuery('.video-wrp', this._settings.placeholder));
		this._settings.player = jQuery('.video-wrp', this._settings.placeholder).flowplayer();

		//jQuery('.video-wrp.is-splash').css('background-image', 'url(' + self._settings.splashImage + ')');
		
		/* This code is needed to disable the seeking functionality */
        jQuery(".fp-timeline").unbind("mousedown touchstart");
        jQuery(".flowplayer").removeClass("is-touch");
        
        this._settings.player.bind("finish", function(){
        	self.videoFinished();
        });
	},
	
	/**
	 * This function activates the Flowplayer video player on any Donator video object
	 * */
	activateVideoPlayer: function(placeholder) {
		
		placeholder.flowplayer({
			analytics: self._analytics,
			splash: true,
			keyboard: false
		});
		placeholder.css('background-image', 'url(' + this._settings.splashImage + ')');
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
		html =  '<span>Después de ver el vídeo podrás seleccionar la ONG con que desees colaborar:</span>' +
			'<p></p>' +
			'<ul class="ong-list"> ' +
			'<li class="ong"><img src="/donator/images/ong/logo_pallapupas_gris.png"></li>' +
			'<li class="ong"><img src="/donator/images/ong/logo_refugi_mataro_gris.png"></li>' +
			'<li class="ong"><img src="/donator/images/ong/logo_sonrisas_bombay_gris.png"></li>' +
			'</ul>'; 
		
		this._settings.ongPlaceholder.html(html);
		return html;
	},
	
	/**
	 * Generates the html code for the list of ONGs available for the campaign (ACTIVE)
	 * */
	ongHTML: function() {
		var self = this;
		var html = '<span>Selecciona la ONG con quien quieres colaborar:</span>' +
			'<p></p>' +
			'<form><ul class="ong-list ong-active">' +
		    '<li class="ong"><a href="#" data-nif="1"><img src="/donator/images/ong/logo_pallapupas.png"></a></li>' +
		    '<li class="ong"><a href="#" data-nif="2"><img src="/donator/images/ong/logo_refugi_mataro.png"></a></li>' +
		    '<li class="ong"><a href="#" data-nif="3"><img src="/donator/images/ong/logo_sonrisas_bombay.png"></a></li>' +
		    '</ul></form>';
		
		this._settings.ongPlaceholder.html(html);
		
		jQuery(".ong").bind('click', 'a', function() { self.saveDonation(); } );
	},
	
	/**
	 * Campaign info
	 * */
	infoHTML:function(campaign) {
		/*
		if(campaign == 'deutscheBank') {
			var html = '<h2 class="campaign-title">Deutsche Bank</h2>' +
				'<p>Construyendo un capital social</p>' +
				'<p>Deutsche Bank concibe la Responsabilidad Social Corporativa como parte integral de su actividad. La generación de resultados contribuye al desarrollo de las sociedades en las que está presente. </p>' +
				'<p>Por ello, en España lleva a cabo una estrategia de Responsabilidad Social, compartiendo objetivos con el Grupo Deutsche Bank en el ámbito internacional, pero adaptada a las características y necesidades locales. </p>' +
				'<br>' +
				'<p>Con tu ayuda y Deutsche bank ya hemos donado:.</p>' +
				'<p>Llevamos donados: <span class="campaing-donation">3.100 €</span></p>' ;	
		} else {
			var html = '<h2 class="campaign-title">DONATOR</h2>' +
				'<p>Gracias a la ayuda de miles de personas estamos colaborando con distintas ONGs y fundaciones para hacer de este mundo un lugar mejor.</p>' +
				'<br>' +
				'<p>Muchas gracias por tu apoyo y colaboración.</p>' +
				'<p>Llevamos donados: <span class="campaing-donation">1.200 €</span></p>' ;
		}*/
		
		switch (campaign) {
			case 'deutscheBank':
				var html = '<h2 class="campaign-title">Deutsche Bank</h2>' +
				'<p>Construyendo un capital social</p>' +
				'<p>Deutsche Bank concibe la Responsabilidad Social Corporativa como parte integral de su actividad. La generación de resultados contribuye al desarrollo de las sociedades en las que está presente. </p>' +
				'<p>Por ello, en España lleva a cabo una estrategia de Responsabilidad Social, compartiendo objetivos con el Grupo Deutsche Bank en el ámbito internacional, pero adaptada a las características y necesidades locales. </p>' +
				'<br>' +
				'<p>Con tu ayuda y Deutsche bank ya hemos donado:.</p>' +
				'<p>Llevamos donados: <span class="campaing-donation">3.100 €</span></p>' ;
				break;
			case 'renault':
				var html = '<h2 class="campaign-title">Renault</h2>' +
				'<p>Renault y su compromiso con la sociedad, colabora directamente por un mundo más sostenible con la Fundación Renault para la movilidad sostenible, esta es la institución que tiene como fin colaborar en la aplicación práctica del compromiso con la responsabilidad social de RENAULT en España, directamente y con la participación de las filiales del Grupo RENAULT en España.</p>' +
				'<br>' ;
				break;
			default:
				var html = '<h2 class="campaign-title">DONATOR</h2>' +
				'<p>Gracias a la ayuda de miles de personas estamos colaborando con distintas ONGs y fundaciones para hacer de este mundo un lugar mejor.</p>' +
				'<br>' +
				'<p>Muchas gracias por tu apoyo y colaboración.</p>' +
				'<p>Llevamos donados: <span class="campaing-donation">1.200 €</span></p>' ;
		}
		return html;
	},
	
	/**
	 * Show video content on a lightbox
	 * */
	showLightbox: function() {
		var self = this;
		var width = jQuery(window).width() - 100;
		var height = jQuery(window).height() - 100;
		
		if(videoDonator != null) {
			if(videoDonator._settings.player.playing == true) {
				videoDonator._settings.player.pause();
			}
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
			this._settings.infoPlaceholder.empty();
			this._settings.messagePlaceholder.empty();
		}
		this._settings = null;
		this._status = 'none';
	},
	
	/**
	 * This function is used after the user has seen the video and click 
	 * on one of the ONGs logos to donate hes time, the function must 
	 * save the click on the data base and show a success message to the user*/
	saveDonation: function() {
		var self = this;
		var html = '<div id="donation-done">Muchas gracias, acabas de donar 0,20€ a una buena causa</div>';
		this._settings.messagePlaceholder.replaceWith(html);
		this._settings.messagePlaceholder.show("slow");
		this._settings.player.disable(true);
		this.ongHTMLoriginal();
		
/*		jQuery.ajax({
			type: "POST",
			url: active_page,
			success: function () {
				var html = '<div>Muchas gracias, acabas de donar 0,20€ a una buena causa</div>'
			}
		});*/
	}
	
};