function validation(){

	var name_data = document.getElementById("name").value;
	var email_data = document.getElementById("email").value;
	var description_data = document.getElementById("text").value;

	var name_message = 0;
	var email_message = 0;
	var text_message = 0;
	


	if( name_data == null || name_data.length == 0 || /^\s+$/.test(name_data) ) {
	  	$("#name_message").css("display", "inline-block");
	}else{
		$("#name_message").css("display", "none");
		name_message = 1;
	}

	if( !(/\S+@\S+\.\S+/.test(email_data)) ) {
  		$("#email_message").css("display", "inline-block");
	}else{
		$("#email_message").css("display", "none");
		email_message = 1;
	}

	if( description_data == null || description_data.length == 0 || /^\s+$/.test(description_data) ) {
	  	$("#text_message").css("display", "inline-block");
	}else{
		$("#text_message").css("display", "none");
		text_message = 1;
	}

	//console.log(name_message);
	//console.log(email_message);
	//console.log(text_message);

	if (name_message == 1 && email_message == 1 && text_message == 1) {
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", "send.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("&name="+name_data+"&email="+email_data+"&text="+description_data);

		$("#general_form").get(0).reset();
		$("#confirmation_message").css("display", "inline-block").fadeOut(12000);
	}else{
		$("#confirmation_message").css("display", "none");
	}
}