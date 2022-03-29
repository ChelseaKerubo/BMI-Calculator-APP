function bmicalc(weight,height){
     bmi=weight/ (height*height);

     if (bmi < 19) {
        return "Underweight"
    } else if (19 <= bmi && bmi < 25) {
         return "Normal"
    } else if (25 <= bmi && bmi < 30) {
        return "Overweight"
    } else {
         return "Obese"
    }
     

}

module.exports = {bmicalc}