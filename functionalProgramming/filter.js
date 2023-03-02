// to check even number in an array and put them in a new array

let numbers = [1,2,20, 35, 12, 17 , 46];
let evenarray = [];
for( let i=0;i<numbers.length;i++){
    if(numbers[i]%2 == 0){
        evenarray.push(numbers[i]);
    }
}
console.log(evenarray);

// Declarative way : using filter method 

// filter returns a new array that match a given condition

let evennums = numbers.filter(function(n){
    return (n%2 == 0);
})

console.log(evennums);