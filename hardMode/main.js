var name = prompt("what is your name?");

var play = confirm("Hello " + name + " do you want to play a game?");

var score = 0;

console.log(name);
console.log(play);

if (play === true){
	var dir = prompt("do you want to go right or left?");

	if(dir === "right"){
		score += 1;
		dir = prompt("you made it into another room. Do you want to go right or left this time?");

		if(dir === "right"){
			score +=1;
			alert("congratulations you made it out of the maze alive!. your score =" + score);

		} else {
			alert("you fell in a hole and died. your score = " + score);
		}

	} else {
		alert("wrong way now you're dead! your score = " + score);
	}

} else {
	alert("come back when you're ready to play");
}