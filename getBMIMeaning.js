// const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  // let heightMeter = height/100
  // return weight/(heightMeter*heightMeter)
  return weight/(height*height)
}
// console.log(calculateBMI(60,1.55))

function getBMIMeaning(weight, height) {
  let bmi = calculateBMI(weight, height)
  if (bmi < 18.5){
  return  "Underweight"}
     else if(bmi>= 18.5 && bmi<=24.9)
     return "Normal weight"
     else (bmi > 25.0)
      return "Overweight" 
}
console.log(calculateBMI(65, 1.8))
console.log(getBMIMeaning(65, 1.8))
console.log(calculateBMI(80, 1.7))
console.log(getBMIMeaning(80, 1.7))
console.log(calculateBMI(44, 1.6))
console.log(getBMIMeaning(44, 1.6))

// module.exports = getBMIMeaning
