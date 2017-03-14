$(document).ready(function(){

	// jQuery methods go here...
    $("#content_two").css("display", "none");
    $("#content_three").css("display", "none");
    $(".left").css("display", "none");

	//green accent-4
    $(".left").click(function(){

    	$(".first_container").css({
    		"background-color": "#00c853", 
    		"transition": "0.6s linear",
    		"-webkit-transition": "0.6s linear",
			"-moz-transition": "0.6s linear",
			"-o-transition": "0.6s linear"
    	});

		$(".dinamic_container").css({
			"transform": "rotateY( 0deg )",
			"-webkit-transform": "rotateY( 0deg )",
			"-moz-transform": "rotateY( 0deg )",
			"-o-transform": "rotateY( 0deg )",
 
			"transition": "0.4s linear",
			"-webkit-transition": "0.4s linear",
			"-moz-transition": "0.4s linear",
			"-o-transition": "0.4s linear"
		});

		
		$(this).fadeOut();
		$(".middle").fadeIn();
		$(".right").fadeIn();

		$("#content_one").fadeIn();
		$("#content_two").fadeOut();
		$("#content_three").fadeOut();
    });

    //light-blue
    $(".middle").click(function(){
    	$(".first_container").css({
    		"background-color": "#0288d1", 

    		"transition": "0.6s linear",
    		"-webkit-transition": "0.6s linear",
			"-moz-transition": "0.6s linear",
			"-o-transition": "0.6s linear"
    	});
		$(".dinamic_container").css({
			"transform": "rotateX( 180deg )",
			"-webkit-transform": "rotateX( 180deg )",
			"-moz-transform": "rotateX( 180deg )",
			"-o-transform": "rotateX( 180deg )",

			"transition": "0.4s linear",
			"-webkit-transition": "0.4s linear",
			"-moz-transition": "0.4s linear",
			"-o-transition": "0.4s linear"
		});
		
		$(".left").fadeIn();
		$(this).fadeOut();
		$(".right").fadeIn();

		$("#content_one").fadeOut();
		$("#content_two").fadeIn();
		$("#content_three").fadeOut();
    });

    //red lighten-1
    $(".right").click(function(){
    	$(".first_container").css({
    		"background-color": "#ef5350",

    		"transition": "0.6s linear",
    		"-webkit-transition": "0.6s linear",
			"-moz-transition": "0.6s linear",
			"-o-transition": "0.6s linear"
    	});

		$(".dinamic_container").css({
			"transform": "rotateY( 180deg )", 
			"-webkit-transform": "rotateY( 180deg )",
			"-moz-transform": "rotateY( 180deg )",
			"-o-transform": "rotateY( 180deg )",

			"transition": "0.4s linear",
			"-webkit-transition": "0.4s linear",
			"-moz-transition": "0.4s linear",
			"-o-transition": "0.4s linear"
		});
		
		$(".left").fadeIn();
		$(".middle").fadeIn();
		$(this).fadeOut();

		$("#content_one").fadeOut();
		$("#content_two").fadeOut();
		$("#content_three").fadeIn();
    });

    $("#responsive_menu").css("display", "none");

    //Menu
    $("#menu_btn").click(function(){
    	var menu = $("#responsive_menu").css("display");
    	//console.log(menu);
    	if ( menu == "none") {
    		$("#responsive_menu").css("display", "inline-block");
    	}else{
    		$("#responsive_menu").css("display", "none");
    	}
    });
});

 

