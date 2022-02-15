//Generate pin
function getPin () {
        const pin = Math.round(Math.random() * 10000);
        let pinString = pin + '';
        if(pinString.length == 4) {
            return pin;
        } else {
            return getPin();
        }
    }

//eventlistener is addedd on button as onclick function (generatePin()) in html
function generatePin() {
    const pin = getPin();
    document.getElementById('show-pin').value = pin;
}


//Calculator
document.getElementById('calc-btn').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if(isNaN(number)) {
       if(number == 'C') {
           calcInput.value = '';
       }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber; 
    }
});

function verifyPin() {
    const pin = document.getElementById('show-pin').value;
    const typedPin = document.getElementById('calc-input').value;

    const failedNotification = document.getElementById('successTry');
    const successNotification = document.getElementById('failedTry');
    if(pin == typedPin) {
        failedNotification.style.display = 'block';
        successNotification.style.display = 'none';
    } else {
        successNotification.style.display = 'block';
        failedNotification.style.display = 'none';
    }
}
