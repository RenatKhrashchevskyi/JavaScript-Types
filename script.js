'use strict'


// check variable by undefined

let x;
if ( x === undefined) {
    console.log('Please, set value to x')
};

//check property of object

let customer = {
    name: 'Jery'
};

if (customer.phoneNumber == undefined) {
    console.log('get a client`s phone number')

}


// typeoff varibale sting, number or bulean

let subject = 'Just a string';
let probe = typeof subject;
console.log(probe);



//task1

let test1 = 'abcdef';
let test2 = 123;
let test3 = true;
let test4 = {};
let test5 = [];
let test6;
let test7 = {'abcdef': 123};
let test8 = ['abcdef', 123];
let test9 = null;

function test10 () {
    return 'abcdef';
};


console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);



// type conversion

if (99 == '99') {
    console.log('a number equals a string');
} else {
    console.log('No way')
}

let numbe = 2;
if (numbe == '2') {
    console.log('ttrue')
} else {
    console.log('ue')

}



let b = ' ';

if (b) {
    console.log('ttrue')
} else {
    console.log('ue')

}


// INDEXOF

let phrase = 'the cat in the hat';

let index = phrase.indexOf('cat');
console.log('there`s a cat sitting at index ' + index);


//method CHARAT

let input = 'important@gmail.com';
for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === '@') {
        console.log('There`s an @ sign at index ' + i);
    } 

}
  


//SUBSTRING

let data = 'name|phone|address';
let val = data.substring(5, 10);
let val1 = data.substring(5);
console.log('Substring is ' + val);
console.log('Substring is ' + val1);


//SPLIT

let someString = 'name|phone|address';
let vals = someString.split('|');
console.log('Split array is ', vals);


// LASTINDEXOF
let str = "Please locate where locate occurs!";
let pos = str.lastIndexOf('te'); 
console.log(pos);


// function validate(phoneNumber) {
//     if (phoneNumber.length !== 8) {
//     return false;
// }
// for (var i = 0; i < phoneNumber.length; i++) {
// if (i === 3) {
// if (phoneNumber.charAt(i) !== '-') {
// return false;
// }
// } else if (Nimber.isNaN(phoneNumber.charAt(i))) {
// return false;
// }
// }
// return true;
// }
// let result = validate(123-4567)
// console.log(result);


// function validate(phoneNumber) {
//     if (phoneNumber.length !== 8) {
//     return false;
//     }
//     var first = phoneNumber.substring(0,3);
//     var second = phoneNumber.substring(4);
//     if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
//     return false;
//     }
//     return true;
//    }

// let result = validate(1234567)
// console.log(result);



function Duck(sound) {
    this.sound = sound;
    this.quack = function() {
        console.log(this.sound);
    }
};

let toy = new Duck ('quack quack');
toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck)