// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

//var 
//let 
    //  -scope dependent
    //-change
    //-there is a difference in scope

//const
    //-  scope dependent 
    //-not changable 

//example:
var nameOfVar = "whatever you want";
// change variable
nameOfVar = "now I mean this"
// 2. ARRAYS
// ==========================================================

// Create an array of five strings


var nestArr = [];
var myArr = ["this", "that", "who", "what", "when"];
//To add to an array
myArr.push("how"); 
// Create an array of five numbers

var numArr = [2,4,5,6,7];


// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"
    //- FIRST: 3 parameters for a for loop, start counter using var i = "somthing" 
    //- SECOND: condition for it to be true usally something like as long as i < 20 or i < Array.length
    //- THIRD : your function (inside the for loop curly brackets will execute before the counter is mathmatically manipulated as long as the condition evaluates to true)
    //- FOURTH: manipulated counter (normally adds or subtracts EX: i++, i--, i*5)
for (let i = 0; i < myArr.length; i++) {

    console.log(myArr[i]);

}

// Create a for loop that loops through your five string array




// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function
function divider (lrgNum , smallNum ) {
    
    lrgNum/ smallNum ;
};
function myFunction () {
    
};



// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

setUser(email, name)

var divider2 = function ( num1, num2) {
    num1/num2
};
divider2(50, 100);


// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object
//Can be thought of as a variable that holds alot of data:It spurpose is to hold information for a commonly referenced object, can hold all indormation about that object such as name age treats and behavior for the cat function below; key value pairs, fucntions instide are called methods

var obj = {
    name: "myObj",
    num: 1,
    ageLimit: true,
    myArr: [whatever],
    newObj: {
        newName: "Latest Name",
        secretAge: " 21"
    },
    //method: particular to the object 
    setUser: function (email, name, birthday){

    }
};


//
obj.setUser;
//Calling a key value pair
obj.name

// Console log any three of the properties in that object
console.log(obj(name, num, age)); 


// Create an Array of 5 Objects



// Console log 3 properties for every one of the five objects



// 6. JQUERY EVENTS
// ==========================================================
//-Always see $ in the front , used to manipulate the DOM 
// Create a basic html button then create an onClick event that triggers an on click event.

<button id="btn1" class="favButton"> My Fav</button>
 //Jquery
 //grab element by ID
 $("#btn1").click(function ({
     console.log("button was clicked")
 }));

 //class
 $(".favBtn")

 //element
$("button")

//JS equivalent
 var btn = document.getElementById("btn1");
 .on("click", function)

 
// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.

//Javascript
//Declare variables at top of file
//Then create your functions
// Then call your function 
