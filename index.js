$(document).ready(function () {

	$("#mobile-modal").hide();
	$("#ellipsis").on("click", function () {
		$("#mobile-modal").fadeIn(300);
	});
	$("#close-modal").on("click", function () {
		$("#mobile-modal").fadeOut(300);
	});

});