console.log("Welcome to the employee wage programs :-) ");

const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArrMAP = new Map();

function getWorkingHrs(employeeCheck){
switch(employeeCheck){
    case 0:
        // console.log(" Employee is Present for Part Time ");
        return PART_TIME_HRs;
        break;
    case 1:
        // console.log(" Employee is Present for Full Time ");
        return FULL_TIME_HRs;
        break;
    default:
        // console.log("Employee is ABSENT ");
    return 0;    
        break;        
}
}
function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HRs;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHrs(employeeCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageArrMAP.set(totalWorkingDays,calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days is :- " + totalWorkingDays+ "\nTotal Employee Hrs is:- "
            +totalEmpHrs+ " \nEmploye wage is :- " +empWage);

let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage +=   dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7 a => Total Days is :- " + totalWorkingDays+
         "\nTotal Employee Hrs is:- "+totalEmpHrs+ " \nEmploye wage is :- " +empWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7 a => Employee wage with reduce :-" +empDailyWageArr.reduce(totalWages, 0));

//UC7B => show the day along with the daily wage using array map helper function

let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B => Daily Wage by using Map ");
console.log(mapDayWithWageArr);

// UC7C => show days when fulltime wage of 160 were earned
 
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}   
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C => Daily wage filter when fullTime  wage earned : ");
console.log(fullDayWageArr);

//UC7D-Find the first occurrence when Full Time Wage was earned using find function
function findfulltimeWage(dailyWage){
    return dailyWage.includes("160");
}   
console.log("UC7D => first occurrence when Full Time Wage "+
mapDayWithWageArr.find(findfulltimeWage));

//UC 7 E Check if Every Element of Full Time Wage is truly holding Full time wage

function IsAllfulltimeWage(dailyWage){
    return dailyWage.includes("160");
}   
console.log("UC7E => Check if Every Element of Full Time Wage :"+
fullDayWageArr.every(IsAllfulltimeWage));

//UC 7 E Check if there is any Part Time Wage

function IsAnyparttimeWage(dailyWage){
    return dailyWage.includes("80");
}   
console.log("UC7F => if there is any Part Time Wage :"+
mapDayWithWageArr.some(IsAnyparttimeWage));


//UC7 G Find the number of days the Employee Worked

function totalDaysWorked(NUM_OF_WORKING_DAYS,dailyWage)
{
    if (dailyWage > 0 ) return NUM_OF_WORKING_DAYS + 1;
    return NUM_OF_WORKING_DAYS;
}
console.log("UC7G Find the number of days the Employee Worked :" 
+ empDailyWageArr.reduce(totalDaysWorked,0));

console.log(empDailyWageArrMAP);

console.log("UC 8: EMP WAGE MAP TotalHRS :" 
+ Array.from(empDailyWageArrMAP.values()).reduce(totalWages,0));
console.log("Daily wage using map: \n"+JSON.stringify([...empDailyWageArrMAP.entries()]));







