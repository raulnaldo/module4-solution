(function() {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i=0; i < names.length; i++) {
    var letter=names[i].substring(0,1);    
    if (names[i].substring(0,1).toUpperCase()=="J"){
      byeSpeaker.speak(names[i]);
    }else{
      helloSpeaker.speak(names[i]);
    }
  }
})();
