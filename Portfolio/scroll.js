jQuery(document).ready(function(){
	// 'catTopPosition' is the amount of pixels #cat
	// is from the top of the document
	var aboutpos = jQuery('#about').offset().top;
	var projectpos = jQuery('#project').offset().top;
	var resumepos = jQuery('#resume').offset().top;
	var contactpos = jQuery('#contact').offset().top;
	var namepos = jQuery('#name').offset().top;
	
	// When #scroll is clicked
	jQuery('.anchorabout').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:aboutpos}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
	
		// When #scroll is clicked
	jQuery('.anchorproject').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:projectpos}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
	
		// When #scroll is clicked
	jQuery('.anchorresume').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:resumepos}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
	
		// When #scroll is clicked
	jQuery('.anchorcontact').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:contactpos}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
	
			// When #scroll is clicked
	jQuery('.anchorname').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:namepos}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});