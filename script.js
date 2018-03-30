var scrollActual, scrollImage;
function parallax(){
	scrollActual=window.pageYOffset;
	var headerImage=document.getElementById("himg");
	var headerText=document.getElementById("htext");
	headerImage.style.top=scrollActual*0.6+'px';
	headerText.style.top='calc(20vh + '+(scrollActual*0.64)+'px)';
}