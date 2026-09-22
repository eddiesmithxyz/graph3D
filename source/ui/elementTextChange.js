function elementTextChange(e) {
    let textbox = e.target;
    textbox.value = textbox.value.replace("pi", piStr);

    let row = textbox.parentNode.parentNode;
    let isValidEquation = getFragShaderFromEq(textbox.value) !== false;
    row.getElementsByClassName("el-warning")[0].style.display = isValidEquation ? "none" : "block";
    row.getElementsByClassName("el-icon")[0].style.display = isValidEquation ? "block" : "none";

    if (typeof window.onEquationInputChanged === "function")
        window.onEquationInputChanged(textbox);


}