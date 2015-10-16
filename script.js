(function() {
	this.Card = function() {
		Card.prototype.hover = function(e) {
			var card = e.currentTarget;

			var bodyRect = document.body.getBoundingClientRect();
			var cardRect = card.getBoundingClientRect();

			var cx = Math.ceil(cardRect.left - bodyRect.left + (cardRect.width / 2.0));
			var cy = Math.ceil(cardRect.top - (bodyRect.top + window.scrollY) + (cardRect.height / 2.0));
			var dx = e.clientX - cx;
			var dy = e.clientY - cy;

			var tiltx = - (dy / cy);
			var tilty = (dx / cx);
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