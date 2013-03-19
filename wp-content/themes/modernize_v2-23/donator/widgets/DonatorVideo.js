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

function Donator_Object_Video (video) {
	this._status = 'inactive';
	this._settings = {
		src_webm: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ video +'.webm',
		src_mp4: 'http://donator.es/wp-content/themes/modernize_v2-23/donator/videos/'+ video +'.mp4',
		placeholder: jQuery('.video-wrp'),
		infoPlaceholder: jQuery('.video-info'),
		contentPlaceholder: jQuery('.video-lightbox')
	};
}

Donator_Object_Video.prototype = {
	/**
	 * 
	 * */
	videoHTML: function() {
		var html;
		jQuery('video',this._settings.placeholder).remove();
		
		html =  '<video preload="none">' +
				'	<source type="video/webm" src="'+ this._settings.src_webm +'"/>' +
				'	<source type="video/mp4" src="'+ this._settings.src_mp4 +'"/>' +
				'</video>';
		
		this._settings.placeholder.append(html);
		
		jQuery('.Donator_VideoPlayer', this._settings.placeholder).flowplayer({ });
		
		return true;
	},
	
	infoHTML: function() {
		var html = '		<h2>Cerveza Mahou</h2>' +
					'		<span>DONADO:</span>' +
					'		<span>2.120Û</span>';
		
		this._settings.infoPlaceholder.append(html);
		
	},
	
	getVideoContent: function() {
		var videoHTML = this.videoHTML();
			
		content = this._settings.contentPlaceholder;
		
		return content;
	}
	
};