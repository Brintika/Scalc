let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('.btn');
let screenValue = '';
for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;


    if (buttonText == 'X') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else if (buttonText == 'AC') {
      screenValue = "";
      screen.value = screenValue;
    }

    else if (buttonText == '=') {
      screen.value = eval(screenValue);
    }

    else if (buttonText == 'sin') {
      screen.value = Math.sin(screen.value);
    }
    else if (buttonText == 'cos') {
      screen.value = Math.cos(screen.value);
    }
    else if (buttonText == 'tan') {
      screen.value = Math.tan(screen.value);
    }
    else if (buttonText == '√x') {
      screen.value = Math.sqrt(screen.value, 2);
    }
    else if (buttonText == 'C') {
      screen.value = screen.value.substr(0, screen.value.length - 1);
    }


    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }

  })
}
function pow() {
  screen.value = Math.pow(screen.value, 2);
}
function fact() {
  let i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  screen.value = f;
}
function pi() {

  buttonText = '3.14159265359';
  screenValue += buttonText;
  screen.value = screenValue;

}
