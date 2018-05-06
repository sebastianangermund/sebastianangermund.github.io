//JavaScript
/* 
JavaScript 
*/

// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/build-construction-maintenance-110823.jpg') {
      myImage.setAttribute ('src','images/under-construction.jpg');
    } else {
      myImage.setAttribute ('src','images/build-construction-maintenance-110823.jpg');
    }
}


// Factorial function code

function fakultet(num) {
	if (num === 1) {return 1
	} else {return num * fakultet(num -1 )}
}

document.querySelector('#idp3').onclick = function() {
    alert('20! = '+fakultet(20));
}

document.querySelector('#idp4').onclick = function() {
	var faktorialVar = prompt('Yor number to be facorialized:');
    alert('Answer :  '+fakultet(faktorialVar));
}


// Personal welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

