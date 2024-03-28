const prompt = require("prompt-sync")();

let name = prompt("Enter your name ");
let age = parseInt(prompt("Enter your age "));

let hasChildren = prompt("Do you have children? (Y/N) ").toUpperCase(); // Convert to uppercase for easier comparison

let visaStatus = prompt("Enter your Visa status (Asylum Seeker/EU Settlement/Others) ");
let needJob = prompt("Do you need a job? (Y/N) ").toUpperCase();
let occupation = prompt("Enter your occupation (if any) ");

let hasIllness = prompt("Do you have any illness and seeking medical help? (Y/N) ").toUpperCase();
let needsBankAccount = prompt("Do you need to open a bank account? (Y/N) ").toUpperCase();

let lawImmigration = visaStatus === "Asylum Seeker" ? 2 : 0;
let childCareInfo = hasChildren === "Y" ? 1 : 0;
let jobCenter = needJob === "Y" ? 2 : 0;
let nhsInfo = hasIllness === "Y" ? 2 : 0;
let bankInfo = needsBankAccount === "Y" ? 1 : 0;

console.log("**Summary**");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Has Children: ${hasChildren}`);
console.log(`Visa Status: ${visaStatus}`);
console.log(`Need Job: ${needJob}`);
console.log(`Occupation: ${occupation}`);
console.log(`Has Illness: ${hasIllness}`);
console.log(`Needs Bank Account: ${needsBankAccount}`);

console.log("\n**Resource Information**");
console.log(`Law and Immigration Help: ${lawImmigration}`);
console.log(`Child Care Information: ${childCareInfo}`);
console.log(`Job Center Information: ${jobCenter}`);
console.log(`NHS Information: ${nhsInfo}`);
console.log(`Bank Account Information: ${bankInfo}`);
