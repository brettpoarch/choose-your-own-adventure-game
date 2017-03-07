var element = document.getElementById("game");

var count = 0

document.getElementById("game").innerHTML = "What is your name?";

var inputName = document.createElement("input");
inputName.id="name";

var inputButton = document.createElement("button");
var nodeEnter = document.createTextNode("enter");



inputButton.appendChild(nodeEnter);

element.appendChild(inputName);
element.appendChild(inputButton);

inputButton.onclick = function(){start()};

function start(){

  var userName = document.getElementById("name").value;
  document.getElementById("game").innerHTML = "Hello " + userName + " do you want to play a game?";

  var yes = document.createElement("button");
  var no = document.createElement("button");

  var nodeYes = document.createTextNode("yes");
  var nodeNo = document.createTextNode("no");

  yes.appendChild(nodeYes);
  no.appendChild(nodeNo);

  element.appendChild(yes);
  element.appendChild(no);

  no.onclick = function(){stop()};

  yes.onclick = function(){play()};
};



function stop(){
  document.getElementById("game").innerHTML = "Come back when you're ready to play";

};

function play(){
  document.getElementById("game").innerHTML = "Ok let's get started and see if we can get out of this maze!";

  var text = document.createElement("p");
  var nodeText =document.createTextNode("Should we go left? or should we go right?");
  text.appendChild(nodeText);
  

  var right = document.createElement("button");
  var left = document.createElement("button");

  var nodeRight = document.createTextNode("right");
  var nodeLeft = document.createTextNode("left");

  right.appendChild(nodeRight);
  left.appendChild(nodeLeft);

  element.appendChild(text);
  element.appendChild(right);
  element.appendChild(left);

  left.onclick = function(){fall()};

  right.onclick = function(){safety()};
};

function fall(){
  document.getElementById("game").innerHTML = "The maze was too dark we fell in a hole and died!";
};

function safety(){
  if (count < 1){
     document.getElementById("game").innerHTML = "Good decision! I think I heard someone fall the other way";

     var text = document.createElement("p");
     var nodeText =document.createTextNode("Should we go left? or should we go right?");
     text.appendChild(nodeText);
  

     var right = document.createElement("button");
     var left = document.createElement("button");

     var nodeRight = document.createTextNode("right");
     var nodeLeft = document.createTextNode("left");

     right.appendChild(nodeRight);
     left.appendChild(nodeLeft);

     element.appendChild(text);
     element.appendChild(right);
     element.appendChild(left);

     right.onclick = function(){fall()};

     left.onclick = function(){safety()};

     return count += 1
  } else {

     document.getElementById("game").innerHTML = "Congratulations you got us out of the maze!!!!!";
  };
};