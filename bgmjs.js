var bgmButton=document.getElementById("play");
var music=document.getElementById("music");
var playing=document.getElementById("playing");
var paused=document.getElementById("paused");

function bgmInit(){
	music.volume=0.4;
	music.play();
	playing.style.display="block";
	paused.style.display="none";
	bgmPicRotate(playing);
};
bgmInit();

bgmButton.onclick=function(){
	if(music.paused){
		music.play();
		playing.style.display="block";
		paused.style.display="none";
		bgmPicRotate(playing);
		
	}
	else
		bgmStop();
};

var deg=0;
var timer;

function bgmPicRotate(ob){
	timer=setInterval(function(){
		ob.style.transform="rotate("+deg+"deg)";
		deg+=5;
	},100);
	
};

function bgmStop(){
	deg=0;
	music.pause();
	playing.style.transform="rotate("+deg+"deg)";
	playing.style.display="none";
	paused.style.display="block";
	clearInterval(timer);	
};
