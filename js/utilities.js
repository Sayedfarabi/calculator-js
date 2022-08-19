function operationHandler(key) {
    const displayField = document.getElementById("display");
    let displayValue = displayField.value;
    let havePlusEnds = displayValue.endsWith(key);
    if (havePlusEnds === false) {
        if (displayValue !== "0" || displayValue !== "00") {
            displayField.value += key;
        } else {
            return
        }
    } else {
        return
    }
}