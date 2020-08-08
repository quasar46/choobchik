// sales hidden - show block
$(document).ready(function () {
	$('#show-more').on('click', function () {
		$('.slide-down').slideToggle();
		if (!$(this).data('status')) {
			$(this).html('Свернуть');
			$(this).data('status', true);
		}
		else {
			$(this).html('Показать больше');
			$(this).data('status', false);
		}
	})
})

// tabs gallery
function openGallery(evt, galleryName) {
	var i, tabcontent, tablinks;
	tabcontent = document.querySelectorAll(".section-gallery__inner");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.querySelectorAll(".section-gallery__tabs li");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(galleryName).style.display = "block";
	evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

