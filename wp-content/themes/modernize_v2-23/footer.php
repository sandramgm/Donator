</div>
<footer class="footer">
	<div class="container">
		<div class="footer-wrapper">
			<?php $gdl_show_footer = get_option(THEME_SHORT_NAME.'_show_footer','enable'); ?>
			
			<?php if( $gdl_show_footer == 'enable' ){ ?>
				<div class="footer-wrapper-gimmick"></div>
			<?php } ?>
			
			
			<!-- Get Footer Widget -->
			<?php if( $gdl_show_footer == 'enable' ){ ?>
				<div class="container mt0">
					<div class="footer-widget-wrapper">
						<?php
							$gdl_footer_class = array(
								'footer-style1'=>array('1'=>'four columns', '2'=>'four columns', '3'=>'four columns', '4'=>'four columns'),
								'footer-style2'=>array('1'=>'eight columns', '2'=>'four columns', '3'=>'four columns', '4'=>'display-none'),
								'footer-style3'=>array('1'=>'four columns', '2'=>'four columns', '3'=>'eight columns', '4'=>'display-none'),
								'footer-style4'=>array('1'=>'one-third column', '2'=>'one-third column', '3'=>'one-third column', '4'=>'display-none'),
								'footer-style5'=>array('1'=>'two-thirds column', '2'=>'one-third column', '3'=>'display-none', '4'=>'display-none'),
								'footer-style6'=>array('1'=>'one-third column', '2'=>'two-thirds column', '3'=>'display-none', '4'=>'display-none'),
								);
							$gdl_footer_style = get_option(THEME_SHORT_NAME.'_footer_style', 'footer-style1');
						 
							for( $i=1 ; $i<=4; $i++ ){
								echo '<div class="' . $gdl_footer_class[$gdl_footer_style][$i] . ' mt0">';
								dynamic_sidebar('Footer ' . $i);
								echo '</div>';
							}
						?>
						<br class="clear">
					</div>
				</div> 
			<?php } ?>
			
			<?php $gdl_show_copyright = get_option(THEME_SHORT_NAME.'_show_copyright','enable'); ?>
			
			<!-- Get Copyright Text -->
			<?php if( $gdl_show_copyright == 'enable' ){ ?>
				<div class="copyright-wrapper">
					<div class="copyright-left">
						<?php echo do_shortcode( __(get_option(THEME_SHORT_NAME.'_copyright_left_area'), 'gdl_front_end') ); ?>
					</div> 
					<div class="copyright-right">
						<?php echo do_shortcode( __(get_option(THEME_SHORT_NAME.'_copyright_right_area'), 'gdl_front_end') ); ?>
					</div> 
					<div class="clear"></div>
				</div>
			<?php } ?>
		</div><!-- footer-wrapper -->
	</div> <!-- container -->
	<div class="social-wrapper">
		<div class="social-icon-wrapper">
			<?php
				global $gdl_icon_type;
				$gdl_social_icon = array(
					'delicious'=> array('name'=>THEME_SHORT_NAME.'_delicious', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/delicious.png'),
					'deviantart'=> array('name'=>THEME_SHORT_NAME.'_deviantart', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/deviantart.png'),
					'digg'=> array('name'=>THEME_SHORT_NAME.'_digg', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/digg.png'),
					'facebook' => array('name'=>THEME_SHORT_NAME.'_facebook', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/facebook.png'),
					'flickr' => array('name'=>THEME_SHORT_NAME.'_flickr', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/flickr.png'),
					'lastfm'=> array('name'=>THEME_SHORT_NAME.'_lastfm', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/lastfm.png'),
					'linkedin' => array('name'=>THEME_SHORT_NAME.'_linkedin', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/linkedin.png'),
					'picasa'=> array('name'=>THEME_SHORT_NAME.'_picasa', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/picasa.png'),
					'rss'=> array('name'=>THEME_SHORT_NAME.'_rss', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/rss.png'),
					'stumble-upon'=> array('name'=>THEME_SHORT_NAME.'_stumble_upon', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/stumble-upon.png'),
					'tumblr'=> array('name'=>THEME_SHORT_NAME.'_tumblr', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/tumblr.png'),
					'twitter' => array('name'=>THEME_SHORT_NAME.'_twitter', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/twitter.png'),
					'vimeo' => array('name'=>THEME_SHORT_NAME.'_vimeo', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/vimeo.png'),
					'youtube' => array('name'=>THEME_SHORT_NAME.'_youtube', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/youtube.png'),
					'google_plus' => array('name'=>THEME_SHORT_NAME.'_google_plus', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/google-plus.png'),
					'email' => array('name'=>THEME_SHORT_NAME.'_email', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/email.png'),
					'pinterest' => array('name'=>THEME_SHORT_NAME.'_pinterest', 'url'=> GOODLAYERS_PATH.'/images/icon/' . $gdl_icon_type . '/social/pinterest.png')
					);
				
				foreach( $gdl_social_icon as $social_name => $social_icon ){
				
					$social_link = get_option($social_icon['name']);
					if( !empty($social_link) ){
					
						echo '<div class="social-icon"><a target="_blank" href="' . $social_link . '">' ;
						echo '<img src="' . $social_icon['url'] . '" alt="' . $social_name . '"/>';
						echo '</a></div>';
					
					}
					
				}
			?>
		</div>
	</div>
	<div class="legal">
		<!-- Get Navigation -->
		<?php wp_nav_menu( array('menu' => 'legal', 'container' => 'div', 'container_class' => 'menu-wrapper', 'container_id' => 'main-superfish-wrapper', 'menu_class'=> 'sf-menu',  'theme_location' => 'main_menu' ) ); ?>
		<br class="clear">
	</div>
	<br class="clear">
</footer>
</div> <!-- body-wrapper -->
	
<?php wp_footer(); ?>

<script type="text/javascript"> 	
	<?php include ( SERVER_PATH ."/javascript/cufon-replace.php" ); ?>
</script>
</body>
</html>