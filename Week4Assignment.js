//Welcome to this week's assignment, thank you for being here.
//1. Creating an array called ages with the given data using brackets.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1a Taking the ages array and finding the last element and subtracting the first index
console.log(ages[ages.length - 1] - ages[0]);
//1b Adding the number 12 to the end of the array to make sure the above code is dynamic
ages.push(12);
console.log(ages);
console.log(ages[ages.length - 1] - ages[0]);
//1c for loop adding up the elements of the array and then dividing by the number of elements to get the average
let sum = 0;
for (let x = 0; x < ages.length; x++) {
  sum += ages[x];
}
let average = sum / ages.length;
console.log(average);
//2 creating an array with the name names using a bracket
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//2a a for of loop to iterate through the array and count the length of each name
for (letters of names) {
  console.log(letters.length);
}
//2b Using join menthod on the names array and a for loop to print each name followed by a space
for (let i = 0; i < names.length; i++) {}
console.log(names.join(" "));
//3 You can access the last element of an array by using the slice method
console.log(`The last element of the names array is ${names.slice(-1)}`);
//4 You can access the first element of an array by using the index of zero, since array's are zero indexed.
console.log(`The first element of the names array is ${names[0]}`);
//5 Using map method to create a new array that counts the length of each name from names array and prints it.
let nameLengths = names.map(function (item, index, array) {
  let l = item.length;
  return l;
});
console.log(nameLengths);
//6 Using reduce method to take the elements from the nameLengths array and add them together in the variable sumOfElements.
let sumOfElements = nameLengths.reduce(function (a, b) {
  return a + b;
});
console.log(sumOfElements);
//7 Used a while loop. As long as the user inputted a number greater than zero, the loop would occur.
let myFunction = (word, n) => {
  let repeat = " ";
  while (n > 0) {
    repeat += word;
    n--;
  }
  return repeat;
};
console.log(myFunction("Hello", 5));
//8 Created a function that took in two parameter and concatenated them with a space between.
let createName = (firstName, lastName) => {
  let fullName = `${firstName} ${lastName}`;
  return fullName;
};
console.log(createName("Courtney", "Prescott"));
//9 Created a funtion that added up the elements of any array and checked in an if statement if the sum was greater than 100, if yes the function returned true.
let myArray = [1, 100];
let sumGreaterThan = (array) => {
  let total = 0;
  for (let number of array) {
    total += number;
    if (total > 100) {
      return true;
    }
  }
};
console.log(sumGreaterThan(myArray));
//10 Created a function that held an array in the single parameter, added up the elements, calculated the average, and then printed the average.
let secArray = [1, 2, 3, 2, 2];
let averageNumber = (array76) => {
  let totalNums = 0;
  for (let v = 0; v < array76.length; v++) {
    totalNums += array76[v];
  }
  let avCalc = totalNums / array76.length;
  console.log(avCalc);
};
console.log(averageNumber(secArray));
//11 Created a function that accepted two arrays, calculated the sum & averages of both. Then compared the aver
let oneArray = [10, 20, 30, 40, 50];
let twoArray = [10, 12, 13, 15, 20];
let bigFunction = (array1, array2) => {
  let totalNumOne = 0;
  for (let x = 0; x < array1.length; x++) {
    totalNumOne += array1[x];
  }
  let avArrayOne = totalNumOne / array1.length;
  let totalNumTwo = 0;
  for (let y = 0; y < array2.length; y++) {
    totalNumTwo += array2[y];
  }
  let avArrayTwo = totalNumTwo / array2.length;

  if (avArrayOne > avArrayTwo) {
    return true;
  }
};
console.log(bigFunction(oneArray, twoArray));

//12 Wrote a function with an if statement to see if the first parameter is true AND the second parameter had a value greater than 10.50 would return true.
let willBuyDrink = (isHotOutside, moneyInPocket) => {
  if (isHotOutside == true && moneyInPocket > 10.5) {
    return true;
  }
};
console.log(willBuyDrink(true, 11));
//13 I created a function that takes 3 parameters and lets you know depending on if you have dirty laundry, money, and time if you need to go do laundry.
let gotoLaundryMat = (dirtyLaundry, availMoney, time) => {
  if (dirtyLaundry == true && availMoney >= 15 && time == true) {
    console.log(
      `You have dirty laundry, $${availMoney}, and some time on your hands.
    Go do your laundry.`
    );
  } else console.log("You do not need to do laundry today");
};
console.log(gotoLaundryMat(true, 20, true));
