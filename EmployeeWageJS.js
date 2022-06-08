console.log("Welcome to the employee wage programs :-) ");


const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;

let emphrs = 0;
let employeeCheck = Math.floor(Math.random()*10)%3;
switch(employeeCheck){
    case 0:
        console.log("\nUC2 =>Employee is Present for Part Time ");
        emphrs = PART_TIME_HRs;
        break;
    case 1:
        console.log("\nUC2 => Employee is Present for Full Time ");
        emphrs = FULL_TIME_HRs;
        break;
    default:
        emphrs = 0;
        console.log("\nUC2 =>Employee is ABSENT ");
        break;        
}
let empWage = emphrs * WAGE_PER_HRs;
console.log("Employe wage is :- " +empWage);