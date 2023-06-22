
let screen = document.getElementById('screen');

let buttons = document.querySelectorAll('button');

screen.value = "";
let screenValue = "";
let buttonTxt = "";

for(let button of buttons) {

    button.addEventListener('click', (e)=>{
        
        buttonTxt = e.target.innerText;
        
        if(buttonTxt=='X') {

            buttonTxt = '*';
            screenValue+=buttonTxt;
            screen.value = screenValue;
        }
        else if(buttonTxt=='C') {

            screenValue = "";
            screen.value = "";
            buttonTxt = "";
        }
        else if(buttonTxt=='=') {

            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else if(buttonTxt=='del') {
            Delete();
        }
        else if(buttonTxt=='e') {

            buttonTxt = "";
            exponential();
        }
        else if(buttonTxt=='sin') {

            buttonTxt = "";
            Sin();
        }
        else if(buttonTxt=='cos') {

            buttonTxt = "";
            Cos();
        }
        else if(buttonTxt=='tan') {

            buttonTxt = "";
            Tan();
        }
        else {

            screenValue+=buttonTxt;
            screen.value = screenValue;
        }

    });
}

function Delete() {

    screenValue = screenValue.slice(0, -1);
    screen.value = screenValue;
}

function exponential() {

    screen.value = Math.pow(2.718281828459045, screen.value);
}

function Sin() {

    screen.value = Math.sin(screen.value);
}

function Cos() {

    screen.value = Math.cos(screen.value);
}

function Tan() {

    screen.value = Math.tan(screen.value);
}