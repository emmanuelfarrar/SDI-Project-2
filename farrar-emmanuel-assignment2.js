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
var food;
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

};

//MAIN CODE
//myConfirm = confirm("CONFIRM SOMETHING");
//function call
procedureFunction(myPrompt);
myConfirm = confirm("CONFIRM SOMETHING");
booleanReturn = booleanFunction(myConfirm, "Buttons in a Blanket");














//OUTPUT