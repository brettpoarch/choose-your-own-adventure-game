function enter() {
  var userName = document.getElementById("name").value;
  var play = document.createElement("p");
  var node = document.createTextNode("Hello " + userName + " do you want to play a game?")
  var yes = document.createElement("button");
  var no = document.createElement("button");
  no.id = "no"
  var nodeYes = document.createTextNode("yes");
  var nodeNo = document.createTextNode("no");
  yes.appendChild(nodeYes);
  no.appendChild(nodeNo);
  play.appendChild(node);
  play.appendChild(yes);
  play.appendChild(no);


  var element = document.getElementById("game");
  element.appendChild(play)

  console.log(userName)
};


document.getElementById("no").onclick=no(){
  document.getElementById("game").innerHTML = "come back when you're ready to play"
};