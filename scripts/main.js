var myHeading = document.querySelector('h1');
myHeading.onclick = function() 
{if(myHeading.textContent === 'Кодекс самурая') {myHeading.textContent = 'Нужно почитать...';}
else {myHeading.textContent = 'Кодекс самурая';} }

// я ебу собак
function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }
  multiply(5,8);

  document.querySelector('.KELBASA').onclick = function() {
    alert('Мечь есть продолжение твоей руки.');
}
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
      myImage.setAttribute ('src','images/2.jpg');
    } else {
      myImage.setAttribute ('src','images/1.jpg');
    }
}
var myButton = document.querySelector('button');
var myH = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Введи своё имя.');
  localStorage.setItem('name', myName);
  myH.textContent = 'Приветсвуем, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myH.textContent = 'Приветсвуем, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
