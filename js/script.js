// Your JS code here
var subTypeElement = document.querySelector("#subscription"); //grabs subscription id from HTML, calls is subTypeElement
var subDurationElement = document.querySelector("#months"); //grabs months id from HTML, calls it subDurationElement
var result = document.querySelector(".result"); //grabs .result class from HTML, calls it result
var subType = "basic"; //assigns basic value option from HTML to subType variable as a default
var subDuration = 1; //assigns default value of 1 to subDuration variable

subTypeElement.addEventListener("change", function (e) { //add event listener & change event to subscription dropdown
  subType = e.target.value; //targets the selection from the subscription dropdown to trigger the updateSubscriptionDiv event
  // console.log(subType);
  updateSubscriptionDiv(); //function call to update the bottom message to reflect subsctiption selection
});

subDurationElement.addEventListener("change", function (e) { //add event listener to update when duration dropdown changes
  subDuration = Number(e.target.value);
  // console.log(subDuration);
  updateSubscriptionDiv(); //function call that updates the bottom message to reflect selection in duration dropdown
});

var updateSubscriptionDiv = function () { //function declaration that updates & calculates price/message when dropdown menu selections change
  var monthlyCost = 5; // value for basic plan, set as first (default) price
  if (subType === "standard") {
    monthlyCost = 7; //monthly cost variable updated if standard is chosen from dropdown
  } else if (subType === "premium") { 
    monthlyCost = 10; //monthly cost value is updated if premium is chosen from dropdown
  }
  var total = subDuration * monthlyCost; //variable that calculates subscription cost
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`; //message text changes to reflect calculation changes
};
