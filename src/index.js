'use strict'

/**
 * 
 * @param {int} fatherAge-вік батька
 * @param {int} sonAge-вік сина
 * @returns {int}-через скільки років батько буде(або був якщо результат від'ємний) старше 2 раза сина
 */
function calculateTwoFoldOlder(fatherAge,sonAge){
    if(
        typeof fatherAge!=='number'||
        typeof sonAge!='number'||
        fatherAge < 0 ||
        sonAge < 0 ||
        fatherAge-sonAge<=15
    ){
        return NaN
    }
    const res=fatherAge-2*sonAge;
    return res;
}

function formMessage(res){
    let message;
    const lastDigit=res%10;
    const firstDigit=Math.floor(res/10);
    let yearsFormatNoun;

    if(isNaN(res)||!isFinite(res)){
        return "Неправильні дані";
    }
    if(res===0){
        return "Цього року";
    }
    else if (firstDigit===1){
        yearsFormatNoun="років"
    }
    else if(lastDigit===0){
        yearsFormatNoun="років";
    }
    else if(lastDigit===1){
        yearsFormatNoun="рік"
    }
    else if(lastDigit<5){
        yearsFormatNoun="роки"
    }
    else{
        yearsFormatNoun="років"
    }

    message = `Батько ${res > 0 ? "буде" : "був"} удвічі старший за сина ${res > 0 ? "через" : ""} ${Math.abs(res)} ${yearsFormatNoun} ${res > 0 ? "" : "тому"}`;
    return message
}

const res=calculateTwoFoldOlder(80,50);

console.log(formMessage(res));