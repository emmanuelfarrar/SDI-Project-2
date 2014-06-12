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
var numberFunction = function ()
{
var numFood;
var someThing = new Array (1, 2, 3, 4);
//loop to count food usage
var loopCounter;
	for (loopCounter = 0; loopCounter < 4; loopCounter++)
	{
	numFood = 10 - someThing[loopCounter];
	console.log("For the run "+ loopCounter + " you should have " + numFood +" pieces of food left, if you consume 1 per run.");	
	
	}
	return numFood;
};

//String Function
var stringFunction = function (playerRole, playerJob)
{
var localStrVar = console.log("Role: " + playerRole + ", Job: " + playerJob);
return localStrVar;
};

//MAIN CODE
procedureFunction(myPrompt);
myConfirm = confirm("CONFIRM SOMETHING");
booleanReturn = booleanFunction(myConfirm, "Buttons in a Blanket");
numberReturn = numberFunction();
stringReturn = stringFunction("DPS", "Bard");

















//OUTPUT