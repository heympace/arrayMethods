/* 
---------------------------------------------------------------
More Array Methods
---------------------------------------------------------------
There are many more array methods than just .push() and .pop(). 
You can read about all of the array methods that exist on the 
Mozilla Developer Network (MDN) array documentation.

.pop() and .push() mutate the array on which they're called. 
However, there are times that we don't want to mutate the 
original array and we can use non-mutating array methods. 
Be sure to check MDN to understand the behavior of the method 
you are using.

Some arrays methods that are available to JavaScript developers 
include: .join(), .slice(), .splice(), .shift(), .unshift(), 
and .concat() amongst many others. Using these built-in methods 
make it easier to do some common tasks when working with arrays.
Below, we will explore some methods that we have not learned yet.

---------------------------------------------------------------
*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// push() - add elements to end of list
groceryList.push('item1, item2, item3');

// pop() - prints last item, removes from list
groceryList.pop();

// shift() - remove first item from beginning of list
groceryList.shift();
// console.log(groceryList);

// unshift() - add to beginning of list
groceryList.unshift('popcorn');
// console.log(groceryList);

// slice - use index position to extract, non mutable
console.log(groceryList.slice(1,4));

// slice - sliced items remain in list
console.log(groceryList);

// indexOf - find index of item
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


/* 
---------------------------------------------------------------
More Practice / Review section
---------------------------------------------------------------
*/


let lifeBalance = ['Growth', ['Friends', 'Family', 'Romance'], 'Career', 'Health', 'Finances', ['Home Space', 'Work space']];

// Use the .length property to find the last element of an array
console.log('Here is the last list item:');
console.log(lifeBalance[lifeBalance.length - 1]);
console.log('');

//Take all the elements in an array and make a string.
console.log('Here is a string of the lifeBalance list:');
console.log(lifeBalance.toString());
console.log('');

//Nest an array within an array.
console.log('Add an array in an array:');
lifeBalance[3] = ['Physical Health', 'Mental Health']
console.log(lifeBalance);

// Access an element in the nested array.
console.log(lifeBalance[5][0]);