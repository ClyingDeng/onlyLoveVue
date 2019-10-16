<template>
  <div>
    <div class="main">
		<canvas id="myCanvas"></canvas>
		<div class="agileinfo_404_main">
			<h1>Effective Error Page</h1>
			<div class="w3_agile_main">
				<h2>Oooops.... Could not find it</h2>
				<p>For some reason the page you requested could not be found on Our server.</p>
				<div class="agile_404 w3layouts">
					<div class="agile_404_pos">
						<h3>4<span>0</span>4<img src="images/1.png" alt=" " /> </h3>
					</div>
					<img src="images/3.png" alt=" " class="w3l"/>
				</div>
			</div>
			<div class="agileits_w3layouts_nav">
				<div class="w3_agileits_nav_left w3">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>
				<div class="wthree_nav_right">
					<ul class="agileits_social_list w3ls">
						<li><a href="#" class="w3_agile_facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#" class="agile_twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#" class="w3_agile_dribble"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
						<li><a href="#" class="w3_agile_vimeo"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div class="clear"> </div>
			</div>
			<div class="agileits_copyright">
				<p>Copyright &copy; 2017.Company name All rights reserved.More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
			</div>
		</div>
	</div>
  </div>
</template>
    <script>
      window.onload = function() {
        Particles.init({
          selector: '#myCanvas',
          color: '#6b6b6b',
          connectParticles: true,
          minDistance: 100
        });
      };
    </script>