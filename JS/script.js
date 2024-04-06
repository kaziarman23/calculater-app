const button = document.querySelectorAll("button");

const inputEl = document.querySelector(".inputEl");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () { //buttion er age [i] deowar karon shob gulo ke catch kora.
        const buttonValue = button[i].textContent;
        if (buttonValue === "AC") {
            clear();
        } else if (buttonValue === "=") {
            inputEl.value = eval(inputEl.value);//this will calculate the value of inputEl
        } else {
            appendValue(buttonValue);
        }
    });
}

function clear() {
    inputEl.value = "";
}

function appendValue(buttonValue) {
    inputEl.value += buttonValue;
}
