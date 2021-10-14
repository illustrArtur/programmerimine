
function checkTemp(temp) {
    if (temp >= 0 & temp <= 20) {
        return -1;
    }
    else if (temp >= 21 & temp <= 40) {
        return 0;
    }
    else if (temp >= 41 & temp <= 60) {
      return 1;

    }
    else {
      return "ebakorrektne temperatuur"
    }
}

while (true) {
    const input = prompt("Input temperature value or 'q' for exit: ");

    if (input == 'q'){
        break;
    }

    let res = checkTemp(input)

    console.log(res)
}