

document.getElementById("keyboard").addEventListener("click", function (event) {
    const keyWord = event.target.value;
    const displayField = document.getElementById("display");
    let displayValue = displayField.value;
    let displaySplit = displayValue.split("");
    let storeDisplayValue = "";
    if (isNaN(keyWord)) {
        if (keyWord == ".") {
            let haveDot = displayValue.includes(".");
            if (haveDot === false) {
                displayField.value += keyWord;
            } else {
                return
            }
        }
        else if (keyWord == "C") {
            displayField.value = "0";
        }
        else if (keyWord == "CE") {
            if (displayValue.length > 0) {
                displaySplit.pop();
                let lastEntityClearDisplayValue = displaySplit.join("");
                displayField.value = lastEntityClearDisplayValue;
            } else {
                displayField.value = "0";
            }
        }
        else if (keyWord == "+") {
            operationHandler("+");
        }
        else if (keyWord == "-") {
            operationHandler("-");
        }
        else if (keyWord == "X") {
            operationHandler("*");
        }
        else if (keyWord == "/") {
            operationHandler("/");
        }
        else if (keyWord == "%") {
            operationHandler("/100");
        }
        else if (keyWord == "=") {
            let result = eval(displayField.value);
            displayField.value = result;
        }

    } else {
        if (displayValue == "0") {
            displayField.value = ""
            displayField.value = keyWord;
        }
        else if (displayValue == "0" && keyWord == "0") {
            displayField.value = "0";
        }
        else if (keyWord == "00" && displayValue == "0" || displayValue == "00") {
            displayField.value = "0";
        }
        else {
            displayField.value += keyWord;
        }
    }
})