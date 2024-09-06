function isOdd(numbers){
    const odd = []
   for(const number of numbers){
    if(number % 2 === 1){
       odd.push(number)
    }
   }
//    console.log(odd)
let sum = 0;
for(const number of odd){
     sum = sum + number;
}
const count = odd.length;
const avg = sum / count;
return avg;

}

const numbers = [42, 35, 67, 89, 88, 84, 97];
const avg = isOdd(numbers);
console.log('average of the numbers is:', avg);
