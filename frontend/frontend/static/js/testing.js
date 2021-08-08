$("#game-menu").hover(function(){
	var game_menu_content = document.getElementById('game-menu-content');

	if( game_menu_content.style.display != "block"){
		game_menu_content.style.display = "block";
	}else{
		game_menu_content.style.display = "none";
	}
});

$("#game-menu-content").hover(function(){
	var game_menu_content = document.getElementById('game-menu-content');

	if( game_menu_content.style.display != "block"){
		game_menu_content.style.display = "block";
	}else{
		game_menu_content.style.display = "none";
	}
});

function RedirectTo(redirectToLink='/'){
	window.location = redirectToLink;
}

function SendMessage(){
	var message = document.getElementById("message").value;
	document.getElementById("message").value = '';

	var messageBox = document.getElementById("message-box");

	var messageContainer = document.createElement("li");
	var messageText = document.createTextNode(message);
	messageContainer.appendChild(messageText);

	messageBox.appendChild(messageContainer);
}

function CheckSendMessage(event){
	var key = event.keyCode;
	if(key == "13"){
		SendMessage();
	}
}