// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. Assign the keys the appropriate values.

var me = {
	firstName: "Ricky",
	age: 25,
	state: "New York"
}

// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'favecolor' and set it to your favorite color as a string

me.favecolor = "Blue";

// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
}
//DON'T TOUCH THE CODE ABOVE
me[text] = "Hello";

// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'. upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

var adjustCount = {
	upVote: function (num){return num++},
	downVote: function (num){return num--}
};

// #5 Create an array called 'myFriends' with four of your friends names

var myFriends = ["Nick", "Luke", "Alex", "Mike"]

// #6 Add a fifth friends name to the end of your myFriends array

myFriends.push("Christian");

// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. Use the built in JavaScript method to create a copy.
//DON'T TOUCH THE CODE BELOW
var myArray = [1,2,3,4]
//DON'T TOUCH THE CODE ABOVE
var myArrayCopy = myArray.slice(0);

// #8 Below is a array, myNumbers. Create a function called 'evensOnly' that returns the 'evensArray' of only even numbers
//DON'T TOUCH THE CODE BELOW
var myNumbers = [333,1,4,5,511,34,88,77,222]
//DON'T TOUCH THE CODE ABOVE
var evensArray = [];
function evensOnly(num){
	for(var i = 0; i < myNumbers.length; i++){
		if(myNumbers[i] % 2 === 0){
			myNumbers[i].push(evensArray);
		}
	}
	return evensArray;
}
// #9 Using filter(), return only your friends of the array of people below. Assign it to a variable called 'trueFriends'.
// CODE HERE
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  {name: "Holly", friend: true}
]

var trueFriends = [];
peopleIknow.filter(function(val,i,arr)){
	if(val.friend === true){
		trueFriends.push(val.name);
	}
	return trueFriends;
}

// #10 create a function caled indexFinder and loop ove the randomNumbers array below and return a new array called 'indexes' with just their indexes. Be sure to invoke indexFinder.
let randomNumbers = [1,3453,34,456,32,3,2,0]

var indexes = [];
function indexFinder(val,i,arr){
	for(var i = 0; i < arr.length; i++){
		indexes.push(i);
		return indexes.indexOf(indexes)
	}
}










