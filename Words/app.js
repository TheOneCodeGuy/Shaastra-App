var x = -1;
var wordsList = [];

function setWords(){
	x++;
	if(x===3) x=0;
	document.getElementById("view").innerHTML = wordsList[x];
}

function showWords(){
	console.log("HI");
	wordsList[0] = document.getElementById("word1").value;
	wordsList[1] = document.getElementById("word2").value;
	wordsList[2] = document.getElementById("word3").value;
	setInterval(setWords, 3000);
};
