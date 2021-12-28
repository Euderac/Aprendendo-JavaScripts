var currentNumberWrapper = document.getElementById("currentNumber")
var heading1 = document.getElementsByTagName('span') [0]
var currentNumber = 0;

function increment() {
    if (0>currentNumber < 10) {
	heading1.style.color = 'black'
	currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;}
	}
function decrement() {
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;  
	if( currentNumber < 0){
	heading1.style.color = 'red'
}}


      