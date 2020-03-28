function init(){
	document.body.innerHTML="Your IP(s):<br>"
	var pc=new RTCPeerConnection({iceServers:[]})
	pc.createDataChannel("")
	pc.createOffer(pc.setLocalDescription.bind(pc),function(){})
	pc.onicecandidate=function(e){
		if (e&&e.candidate&&e.candidate.candidate){
			document.body.innerHTML+=e.candidate.candidate.split("\n")[0].split(" ")[4]+"<br>"
		}
	}
}
document.addEventListener("DOMContentLoaded",init,false)