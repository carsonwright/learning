// Types
var string = 'string';
var string2 = "abc 123 true"
var number = 1;
var number2 = number + 1;

var floatingNumber = 1.1; 
// braces 
// {} curly
// [] square
// () round
// { open curly
// } close curly
// [ open square
// ] close square
// ( open round
// ) close round
// hello this is a comment

var floatingNumber2 = floatingNumber + 1.1; // this is a fraction
var boolean = true;
// this is a boolean
var array = [1, 2, 3]; // this is an array
var a = { a: 1, b: 2 }; // this is an object
var f = function () { return 1; }; // this is a procedure
var u = undefined; // this is undefined
var n = null; // this is the blank value that is not undefined
function () {return 2; };

// "1" + "2" = "12"
// 1 + 2 = 3
// concat "Carson" "Wright" 
// "carson" + " " + "wright"
// pillow = "Pillow"
// tired = "Tired"
// "Tired" + "Pillow"
/// "TiredPillow"

function FullName (first, last) {
    return first + " " + last
}

var result = FullName("Carson","Wright");
// Carson Wright

var result = FullName("Tired","Pillow");
// Tired Pillow

var result = FullName("John","Doe");
// John Doe

console.log(result);


// && and
// || or
// ! not
// == equal
// != not equal
// > greater than
// < less than
// >= greater than or equal
// <= less than or equal

var condition = true
if(condition) /* is the condition */ { // block
    // do something
}

if(x == 1) {
    console.log("x is 1");
}


if(x != 1) {
    console.log("x is not 1")
}

// x not equal to 1 and not equal to 2

if(x != 1 && x != 2) {
    console.log("x is not 1 and x is not 2")
}

// x is equal to 1 or equal to 2

if(x ==  1 || x == 2) {
    console.log("x is 1 or x is 2")
}

// x greater than 1 and less than 10

if(x > 1 && x < 10) {
    console.log("x is greater than 1 and less than 10")
}

// x greater than or equal to 1 and less than or equal to 10

if(x >= 1 && x <= 10) {
    console.log("x is greater than or equal to 1 and x is less than or equal to 10")
}

// x is les than 1 or greater than 10

if(x < 1 || x > 10) {
    console.log("x is less than 1 or x is greater than 10")
}

// if(x happens ){
//     do x
// }else{
//     do y
// }
// create a function named valueCheck that accepts x as a parameter and checks if it is less than 10

function valueCheck(x) {
    if(x < 10) {
        return true 
    }
}

(async()=>{
    const wait = (i)=>(new Promise((r)=>{
        setTimeout(()=>{
            r    
        }, i)
    }))
    for(let user of users){
        await wait(1000) 
        console.log(user)
    }
})()