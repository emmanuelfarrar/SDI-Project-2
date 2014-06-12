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
	myPrompt = prompt("Are you ready to show the team how a Bard battles?", "Enter 'Yes' or 'No'");  //prompting user to give an answer
	if (myPrompt === "Yes")
	{
	console.log ("We have our bard let's make sure he is ready");
	}else{
	console.log("You are either not ready or entered invalid data. Please reload the page and try again.");
	}
};


//Boolean Function: 
var booleanFunction = function (myConfirm,food)
{
	var food; //variable to identify type of food
//while loop to compare food type from function call
	while (myConfirm === true && myPrompt === true)
{
		if (food === "Buttons in a Blanket")
		{
		console.log("The best food buff for DPS is " + food + ".");
		break;
		}else{
		console.log("FYI: The best food buff for Tanks and Healers is " + food +".");
		break;
		}
}
	return food;
};

//Number Function: 
var numberFunction = function ()
{
var numFood;
var someThing = new Array (1, 2, 3, 4);  //local array for simple math
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
myConfirm = confirm("You are aware that you need to have a food buff for this?");
console.log("We may need to talk about the food you need for the best food buff");
booleanReturn = booleanFunction(myConfirm, "Buttons in a Blanket");
console.log("We will start you off with 10 pieces of food, but here are the statics if you eat one per run for 4 runs.");
numberReturn = numberFunction();
console.log("So you can see if you have to make multiple runs you will run out of food quicker");
console.log("You are ready now. We will log you as... ");
stringReturn = stringFunction("DPS", "Bard");
console.log("If you do well we will add you to the raid team and you will be able to help us next week, so good luck!!!");







