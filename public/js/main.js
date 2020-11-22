// JQuery Smooth Scroll Animation
$(".nav-link").on("click", function (e) {
	if (this.hash !== "") {
		e.preventDefault();

		const hash = this.hash;

		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top - 150,
			},
			1500
		);
	}
});
