/**
 * year will be leap year if the year is divisible by 4 
 * **/ 

// simple logic
function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const lipi = isLeapYear(2023);
console.log(lipi);

/**
 * 1. those year that is not divisible by 100, if the year is divisible by 4 then it will be leap year
 * 2. if the year is divisible by 400 then the year is leap year*/ 


function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else{
        if(year % 100 === 0 && year % 400 === 0){
            return true;
        }
        return false
    }
}
const lip = isLeapYear2(2064);
console.log(lip)
