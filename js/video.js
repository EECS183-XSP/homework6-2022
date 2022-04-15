var video = document.getElementById("player1");
var volume = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// to play the video//
document.querySelector("#play").addEventListener("click",function(){
	console.log("Play Video")
	video.play();
//to change volume scale//
	console.log("The current volume is " + video.volume)
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

//to pause the video//
document.querySelector("#pause").addEventListener("click",function(){
	console.log("Pause Video")
	video.pause();
});

//to slow video//
document.querySelector("#slower").addEventListener("click", function() {
	console.log ("Slower Video")
	var speed = video.playbackRate
	video.playbackRate = 0.95*speed
	console.log("New speed is " + video.playbackRate)
});

//to speed up video//
document.querySelector("#faster").addEventListener("click", function() {
	console.log ("Speed Up Video")
	var speed = video.playbackRate
	video.playbackRate = 1.05*speed
	console.log("New speed is " + video.playbackRate)
});

//to skip ahead// 
document.querySelector("#skip").addEventListener("click", function() {
	console.log ("Skip Ahead")
	console.log ("Current position of video:" + video.currentTime)
	var time = video.currentTime + 15
	if(time > video.duration)
		time = 0;
	video.currentTime = time
	console.log("New position of video: " + video.currentTime)
});

//to mute video// 
document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted == false) {
        video.muted = true
        document.querySelector("#mute").innerHTML = "Unmute" 
        console.log("Video is muted")
    }
    else {
        video.muted = false
        document.querySelector("#mute").innerHTML = "Mute"
        console.log("Video is unmuted")
    }
})

//to enable volume slider//
document.querySelector("#slider").addEventListener("click", function() {
    console.log("current volume is:" + this.value)
    video.volume = this.value/100
    document.querySelector("#volume").innerHTML = video.volume*100 + "%"
	console.log("new volume is:" + this.value)
})

//to be in vintage view//
document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Old School View")
    video.classList.add("oldSchool")
})

//to be in original view//
document.querySelector("#orig").addEventListener("click", function() {
    console.log("Original View")
    video.classList.remove("oldSchool")
})
