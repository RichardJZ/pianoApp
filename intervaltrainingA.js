var allNotes = ["C3","C3#","D3","D3#","E3","F3","F3#","G3","G3#","A3","A3#","B3","C4","C4#","D4","D4#","E4","F4","G4","G4#","A4","A4#","B4"];
var chosenNotes = [];
var rnFirstKeyNr;
var counter = 0;
var interval = 800;

function noteChallenge(){
	chosenNotes = [];
	var nrInt = prompt("What max interval would you want?");
	rnSecondKeyNr = Math.round(Math.random()*nrInt);

	chosenNotes.push(allNotes[0],allNotes[rnSecondKeyNr]);


}



function playFirstNote(){
	if(scaleArray[counter] === "C3"){
	alert("C3");
	
}
else if(scaleArray[counter]=== "C3#"){
 	alert("C3sharp");
 	
 }
else if(scaleArray[counter]=== "D3"){
 	alert("D3");
 	
 }
else if(scaleArray[counter]=== "D3#"){
 		alert("D3sharp");
 	
 }
 else if(scaleArray[counter]=== "E3"){
 	alert("E3");
 	
 } 
else if(scaleArray[counter]=== "F3"){
 	alert("F3");
 }
else if(scaleArray[counter]=== "F3#"){
 	alert("F3sharp");
 }
else if(scaleArray[counter]=== "G3") {
alert("G3");
}
else if(scaleArray[counter]=== "G3#") {
alert("G3sharp");
}
else if(scaleArray[counter]=== "A3") {
alert("A3");
}
else if(scaleArray[counter]=== "A3#") {
alert("A3sharp");
}
else if(scaleArray[counter]=== "B3") {
alert("B3");
}
else if(scaleArray[counter]=== "C4") {
alert("C4");
}
else if(scaleArray[counter]=== "C4#") {
alert("C4sharp");
}
else if(scaleArray[counter]=== "D4") {
alert("D4");
}
else if(scaleArray[counter]=== "D4#") {
alert("D4sharp");
}
else if(scaleArray[counter]=== "E4") {
alert("E4");
}
else if(scaleArray[counter]=== "F4") {
alert("F4");
}
else if(scaleArray[counter]=== "F4#") {
alert("F4sharp");
}
else if(scaleArray[counter]=== "F4") {
alert("G4");
}
else if(scaleArray[counter]=== "G4#") {
alert("G4");
}
else if(scaleArray[counter]=== "A4") {
alert("A4");
}
else if(scaleArray[counter]=== "A4#") {
alert("A4sharp");
}
else if(scaleArray[counter]=== "B5") {
	alert("B5");
	}
	
	
else if(scaleArray[counter]=== "C5") {
	alert("C5");
	}
}

function playScaleImpro(){
    var i = setInterval(function(){
    // do your thing

playFirstNote();
counter++



setTimeout(function(){
clearInterval(i)},12000)
},interval)	
}