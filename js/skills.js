$(document).ready(function(){

	// jQuery methods go here...
    $(".chart_container").css("display", "none");

	//green accent-4
    $(".section").click(function(){

    	var rotation = $(this).css("transform");
    	/*var attribute = $(this).find(".chart").attr("data-percent");
    	console.log(rotation);
    	console.log(attribute);*/

    	$('.chart').easyPieChart({
        //your configuration goes here
        barColor: "#ef5350",
        //trackColor: "#f2f2f2",
        trackColor: "#e0f7fa",
        //scaleColor: "#ef9a9a",
        scaleColor: false,
        lineCap: "square",
        lineWidth: 8,
        size: 140,
        animate: 2000,
        onStart: $.noop,
        onStop: $.noop,
        onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
    	});

    	if (rotation == "matrix(1, 0, 0, 1, 0, 0)" || rotation == "none") {

		$(this).css({
			"transform": "rotateY( 180deg )",
			"-webkit-transform": "rotateY( 180deg )",
			"-moz-transform": "rotateY( 180deg )",
			"-o-transform": "rotateY( 180deg )",
 
			"transition": "0.6s linear",
			"-webkit-transition": "0.6s linear",
			"-moz-transition": "0.6s linear",
			"-o-transition": "0.6s linear",

			"border": "1px solid #ef5350"
		});

		$(this).find(".logo").css("display", "none");
		$(this).find(".chart_container").fadeIn(1000);

	}else{
		$(this).css({
			"transform": "rotateY( 0deg )",
			"-webkit-transform": "rotateY( 0deg )",
			"-moz-transform": "rotateY( 0deg )",
			"-o-transform": "rotateY( 0deg )",
 
			"transition": "0.6s linear",
			"-webkit-transition": "0.6s linear",
			"-moz-transition": "0.6s linear",
			"-o-transition": "0.6s linear",

			"border": "1px solid transparent"
		});


		$(this).find(".logo").fadeIn(1000);
		$(this).find(".chart_container").css("display", "none");
	}
    });

});
