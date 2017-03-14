// When the DOM is ready
$(document).ready(function(){
  
// init controller
var controller = new ScrollMagic.Controller();


// build tween
var tween = TweenMax.from("#animation", 0.8, {
	autoAlpha: 0, 
	scale: 0.8
});
// build scene
var scene = new ScrollMagic.Scene({
	triggerElement: "#about"
})
.setTween(tween)
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);


// build tween_2
var tween_2 = TweenMax.from("#animation_2", 0.8, {
	autoAlpha: 0, 
	scale: 0.8
});
// build scene_2
var scene_2 = new ScrollMagic.Scene({
	triggerElement: "#contact"
})
.setTween(tween_2)
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);



// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
	TweenMax.to(window, 1.2, {scrollTo: {y: newpos}});
});
//  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function (e) {
	var id = $(this).attr("href");
	if ($(id).length > 0) {
		e.preventDefault();

		// trigger scroll
		controller.scrollTo(id);

			// if supported by the browser we can even update the URL.
		if (window.history && window.history.pushState) {
			history.pushState("", document.title, id);
		}
	}
});
  
});





