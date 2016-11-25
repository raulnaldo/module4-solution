var speakWord = "Good Bye ";
(function(window){
	var byeSpeaker = {};
	var mySpeakWord=speakWord;
	byeSpeaker.speak = function(theName){
		console.log(mySpeakWord + theName);
	}
	window.byeSpeaker=byeSpeaker;
})(window);
