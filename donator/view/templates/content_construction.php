<div class="box <?php echo $formSent ?>">
	<?php if($formSent != "submited") { ?>
		<span>Pre-regístrate en DONATOR <br>
		y cuando estemos listos te haremos llegar una invitación</span>
		<?php 
			if($error) {
				echo "<span class='error'>$error_msg</span>";
			}
		?>
		<form action="index.php" method="post">
			<input placeholder="nombre" type="text" name="name" value="<?php echo $name; ?>">
			<input placeholder="e-mail" type="email" name="email" value="<?php echo $email; ?>">
			<input type="submit" name="formSubmit" value="Convierteme en DONATOR">
		</form>
	<?php } else { ?>
		<div class='confirmation'>
			<h2>¡Bienvenido a Donator!</h2>
			<p>Te estabamos esperando, gracias a ti sumamos esfuerzos para alcanzar grandes metas, ayudar a los más desfavorecidos, personas que sufren, que lo necesitan, causas injustas.</p>
			<p class="highlighted"><span class="highlighted-2">Comparte</span> <span>este link e invita a tus amigos a formar parte de una gran iniciativa social:</span></p>
			<div id="fb-root"></div>
				<script>(function(d, s, id) {
				  var js, fjs = d.getElementsByTagName(s)[0];
				  if (d.getElementById(id)) return;
				  js = d.createElement(s); js.id = id;
				  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
				  fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));</script>
			</div>
			<div class="fb-like" data-href="http://donator.es" data-send="false" data-layout="button_count" data-width="450" data-show-faces="true" data-font="trebuchet ms"></div>
			<a href="https://twitter.com/share" class="twitter-share-button" data-via="esDonator" data-related="esDonator" data-count="none" data-hashtags="donator">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
		
	<?php }?>
</div>