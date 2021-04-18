function shout(string) {
    return string.toUpperCase(); //'Hello!'
}

function whisper(string){
    return string.toLowerCase(); //'hello'
  }

  function logShout(string){
    return console.log(string.toUpperCase()) //'Hello!'
  }


  function logWhisper(string){
    return console.log(string.toLowerCase()) //'hello'
  }

  
  
  
  function sayHiToGrandma(string){
    if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
  else if (string === string.toUpperCase()) return "YES INDEED!";

  }