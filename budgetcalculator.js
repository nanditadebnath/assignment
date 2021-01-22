//budgetcalculator
function budgetCalculator(watch, phone, laptop) {
    if (watch > 0 && phone > 0 && laptop > 0) {
        var watchTotal = watch * 50;
        var phoneTotal = phone * 100;
        var laptopTotal = laptop * 500;

        var total = watchTotal + phoneTotal + laptopTotal;
    }
    else {
        console.log("sorry! invalid number");
    }
    return total;
}
var totalbudget = budgetCalculator(6,8,9);
console.log(totalbudget);



