
var Slider = {
	init: function() {
		this.cacheEls();
		this.bindEvents();
	},
	cacheEls: function() {
		this.left = $('#left');
		this.right = $('#right');
		this.leftEnd = 0;
	},
	bindEvents: function() {
		this.left.on('click', this.moveLeft);
		this.right.on('click', this.moveRight);
	},
	moveLeft: function() {
		var that = Slider;
		if (that.leftEnd < 0) {
			that.leftEnd += 246;
			$('#piano').animate({'left': that.leftEnd}, 300);
		}
	},
	moveRight: function() {
		var that = Slider;
		if (that.leftEnd <= 0 && that.leftEnd >= -1229) {
			that.leftEnd -= 246;
			$('#piano').animate({'left': that.leftEnd}, 300);
		}
	}
};

Slider.init();