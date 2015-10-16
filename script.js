(function() {
	this.Card = function() {
		Card.prototype.hover = function(e) {
			var card = e.currentTarget;

			var cx = Math.ceil(card.offsetLeft + (card.offsetWidth / 2.0));
			var cy = Math.ceil(card.offsetTop - window.pageYOffset + (card.offsetHeight / 2.0));
			var dx = e.pageX - cx;
			var dy = e.pageY - window.pageYOffset - cy;

			var tiltx = - (dy / cy);
			var tilty = (dx / card.offsetWidth / 2.0);
			var radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
			var degree = (radius * 40);

			card.style.setProperty('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
			card.style.setProperty('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
			card.style.transition = '-webkit-transform 0s, transform 0s';
		};

		Card.prototype.reset = function(e) {
			var card = e.currentTarget;
			card.style.setProperty('-webkit-transform', 'rotate3d(0, 0, 0, 0deg)');
			card.style.setProperty('transform', 'rotate3d(0, 0, 0, 0deg)');
			card.style.transition = '-webkit-transform .5s, transform .5s';
		};
	}
}());