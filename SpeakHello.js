var speakWord="Hello ";
(function(window){
	var helloSpeaker = {};
	var mySpeakWord=speakWord;
	helloSpeaker.speak = function(theName){
		console.log(mySpeakWord + theName);
	}
	window.helloSpeaker=helloSpeaker;
})(window);
