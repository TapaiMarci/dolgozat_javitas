//Get the Middle Character
function getMiddle(s){
    const length = s.length;

  if (length % 2 === 0) {
    return s.substring(length / 2 - 1, length / 2 + 1);
  } 
  else {
    return s.charAt(Math.floor(length / 2));
  }
}
console.log(getMiddle("test"));    
console.log(getMiddle("testing")); 
console.log(getMiddle("middle"));  
console.log(getMiddle("A"));      
//You're a square!
//String cleaning
function stringClean(s){
    return s.replace(/[0-9]/g, '');
}

const chai = require("chai");
const assert = chai.assert;

console.log(stringClean('! !'))
console.log(stringClean('123456789'))
console.log(stringClean('This looks5 grea8t!'))
//Calculate BMI
function bmi(weight, height){
    let bmi = weight / (height * height);

    if (bmi <= 18.5){
        return "Underweight";
    }
    else if (bmi <= 25){
        return "Normal";
    }
    else if (bmi <= 30){
        return "Overweight";
    }
    else{
        return "Obese";
    }
}

console.log(bmi(45, 1.7));
console.log(bmi(68, 1.75)); 
console.log(bmi(85, 1.75)); 
console.log(bmi(95, 1.75)); 