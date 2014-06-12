//alert("JavaScript works!");
/*Emmanuel Farrar
  SDI 1406
  Project 2
*/

//GLOBAL VARIABLES
var myPrompt; 
var myConfim;
var stringVar;
var numberVar;
var booleanVar;
var booleanReturn;
var numberReturn;
var stringReturn; 



//FUNCTIONS

//Procedure using value given from variable myPrompt
var procedureFunction = function(myPrompt)
{
	myPrompt = prompt("Ask some sort of question");  //prompting user to give an answer
	if (myPrompt === "Mannie")
	{
	console.log ("ENTER TEXT HERE");
	}else{
	console.log("ENTER ALT TEXT HERE");
	}
};


//Boolean Function: 
var booleanFunction = function (myConfirm,food)
{
	var food;    //variable to identify type of food
//while loop to compare food type from function call
	while (myConfirm === true)
{
		if (food === "Buttons in a Blanket")
		{
		console.log("The best food buff for DPS is " + food + ".");
		break;
		}else{
		console.log("The best food buff for Tanks and Healers is " + food +".");
		break;
		}
}
	return food;
};

//Number Function: 
var numberFunction = function (numVar)
{
var numFood;
//need to find a use to loop this
var loopCounter;
	for (loopCounter = 1; loopCounter <= 4; loopCounter++)
	{
	numFood = 5 * numVar
	console.log("You will need this much food " + numFood);	
	}
	return numFood;
};

//String Function
var stringFunction = function () 
{
var playerRole = "DPS";
var playerJob = "Bard";

console.log("The role we need to fill is that of a " + playerRole +" playing as a " +playerJob +".");
return playerRole;
return playerJob;
}

//MAIN CODE
procedureFunction(myPrompt);
myConfirm = confirm("CONFIRM SOMETHING");
booleanReturn = booleanFunction(myConfirm, "Buttons in a Blanket");
numberReturn = numberFunction(5);
stringFunction();














//OUTPUT