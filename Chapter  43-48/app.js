// const { func } = require("joi");

console.log('Hello Wrold');

// Events link
// 
// function sayHello() {
// alert('Hello world');
// }
// 

// Events button

// function btn() {
// alert('Hello button');
// }


// function picture(e) {
// alert("Great you did it");
// }

// 
// function pic1() {
// var result = document.getElementById('pic');
// result.src = "./images/download.jpg";
// console.log(result.alt);
// }
// 
// 
// function pic2() {
// var result = document.getElementById('pic');
// result.src = "./images/liverpool.jpeg";
// console.log(result)
// }


// function changing() {
// var result = document.getElementById('hello');
// result.style.color = 'red';
// console.log(result);
// }




// events field



// onFocus

// function chngBg() {
//     var result = document.getElementById('changeColor');

//     result.style.backgroundColor = 'yellow';

//     console.log(result);
// }


// // onBlur

// function blurColor() {
//     var result = document.getElementById('changeColor');
//     result.style.backgroundColor = '#fff';
// }




/*
    Assignment 22/11/2021
    cover chapter 43-48
*/

// Q1

function showMesg() {
    alert('Hello World!');
}



// Q2

function phone1() {
    alert('Phone 1 Thank you for your review');
}

function phone2() {
    alert('Phone 2 Thank you for your review');
}

function phone3() {
    alert('Phone 3 Thank you for your review');
}



// Q3

function std1() {
    var del = document.getElementById('student1');
    console.log(del);
    del.innerHTML = del.style.display = "none";
}

function std2() {
    var del = document.getElementById('student2');
    console.log(del);
    del.innerHTML = del.style.display = 'none';
}

function std3() {
    var del = document.getElementById('student3');
    console.log(del);
    del.innerHTML = del.style.display = 'none';
}

function std4() {
    var del = document.getElementById('student4');
    console.log(del);
    del.innerHTML = del.style.display = 'none';
}

// Q4

function pictureOne() {
    var changeImg = document.getElementById('results');
    console.log(changeImg.alt);
    changeImg.src = "./images/liverpool.jpeg";
}

function pictureTwo() {
    var changeSecondImg = document.getElementById('results');
    console.log(changeSecondImg.alt);
    changeSecondImg.src = './images/boy.jpg';
}


// Q5


var couterVal = 0;

function incrementClick() {
    updatedDisplay(++couterVal);
}

function decrease() {
    updatedDisplay(--couterVal);
}

function updatedDisplay(val) {
    document.getElementById('counter-label').innerHTML = val;
}