<?php

	/*	
	*	Donator Include Script File
	*	---------------------------------------------------------------------
	* 	@version	1.0
	* 	@author		Donator
	* 	@link		http://donator.es
	* 	@copyright	Copyright (c) Donator
	*	---------------------------------------------------------------------
	*	This file manage to embed the stylesheet and javascript to each page
	*	based on the content of that page.
	*	---------------------------------------------------------------------
	*/

function donator_scripts_method() {
    wp_enqueue_script('flowplayer', get_template_directory_uri() . '/donator/js/flowplayer/flowplayer.js' , 'jquery', 'v5.3.2' );
    wp_enqueue_script('fancybox', get_template_directory_uri() . '/donator/js/fancybox/fancybox.js' ,  'jquery', 'v2.4.1', true );
}

function donator_widgets_method () {
    wp_enqueue_script('lightbox', get_template_directory_uri() . '/donator/widgets/DonatorLightBox.js' , 'fancybox', 'v0.1' );
    wp_enqueue_script('video', get_template_directory_uri() . '/donator/widgets/DonatorVideo.js' , 'flowplayer', 'v0.1' );
}

function donator_styles_method() {
	wp_enqueue_style('style-flowplayer', get_template_directory_uri() . '/donator/js/flowplayer/flowplayer-minimalist.css');
	wp_enqueue_style('style-fancybox', get_template_directory_uri() . '/donator/js/fancybox/fancybox.css');
    wp_enqueue_style('style-donator', get_template_directory_uri() . '/donator/css/donator.css');
}    
 
add_action('wp_enqueue_scripts', 'donator_scripts_method'); 
add_action('wp_enqueue_scripts', 'donator_widgets_method');
add_action('wp_print_styles', 'donator_styles_method'); 
?> 