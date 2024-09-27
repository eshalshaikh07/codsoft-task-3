function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
        display.style.animation = 'fadeIn 0.5s'; // Animate answer
    } catch (error) {
        display.value = "Error";
        display.style.animation = 'fadeIn 0.5s'; // Animate error
    }
}
