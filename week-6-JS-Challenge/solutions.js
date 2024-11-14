import helperMethods from "./helper.methods.js";
// import response from './response.matches.json' assert { type: 'json' };
import response from "./response.matches.json" with { type: "json" };

//console.log("Check Values: " + response.matches[0].status)

console.log(helperMethods.filterMatchesByLocationAndStatus(response)); // Returns: ["10-016", "10-015"]
console.log(helperMethods.filterMatchesByCoatingAndShower(response)); // Returns: ["10-015"]
console.log(helperMethods.filterMatchesByLocationAndPrice(response)); // Returns: ["10-015"]
console.log(helperMethods.filterMatchesByCreatorFeeAndStatus(response)); // Returns: ["10-016", "10-015"]
console.log(helperMethods.filterMatchesByCoveringAndDressingRoom(response)); // Returns: ["10-016"]