function createObject(type, objectClasses, parent) {
    let newObject = document.createElement(type);
    for (let objectClass of objectClasses)
        newObject.classList.add(objectClass);
    if (parent != undefined) {
        parent.appendChild(newObject);
    }
    return newObject;
}


function addElement(equation = "", hidden = false) {
    let rowIndex = document.getElementsByClassName("element-row").length;
    let newRow = createObject("div", ["element-row"]);
    newRow.id = ("element" + rowIndex.toString());
    let label = createObject("div", ["element-label"], newRow);
    let labelNumber = createObject("span", ["el-number", "no-select"], label);
    let labelNumberText = document.createTextNode((rowIndex + 1).toString());
    labelNumber.appendChild(labelNumberText);
    let labelIconContainer = createObject("div", ["el-icon-container"], label);
    let labelIcon = createObject("div", ["el-icon"], labelIconContainer);
    let bg = GetNextIconCol();
    labelIcon.style.backgroundColor = bg.str;
    newRow.setAttribute("data-r", bg.r);
    newRow.setAttribute("data-g", bg.g);
    newRow.setAttribute("data-b", bg.b);
    labelIcon.addEventListener("click", function (e) { hideElement(e); });
    let labelWarning = createObject("span", ["el-warning", "material-icons", "no-select"], labelIconContainer);
    labelWarning.innerHTML = "warning";
    labelWarning.style.display = "none";


    let element = createObject("div", ["element"], newRow);
    let elementInput = createObject("math-field", ["element-input", "maths-input"], element);
    elementInput.mathModeSpace = '\\:';
    elementInput.keypressVibration = false;

    elementInput.id = ("elementInput" + rowIndex.toString());
    elementInput.value = equation;
    elementInput.addEventListener("keydown", function (e) {
        if (e.key == "Enter")
            document.getElementById("renderButton").click();
    });
    elementInput.addEventListener("input", function (e) { elementTextChange(e); });

    let deleteContainer = createObject("div", ["element-delete-container", "no-select"], newRow);
    let deleteButton = createObject("span", ["element-delete", "material-icons"], deleteContainer);
    let deleteButtonText = document.createTextNode("clear");
    deleteButton.appendChild(deleteButtonText);
    deleteButton.addEventListener("click", function (e) { deleteElement(e); });

    newRow.setAttribute("data-visible", "true");


    document.getElementById("elementList").appendChild(newRow);

    if (hidden)
        hideElement({ target: labelIcon });
}

function deleteElement(e) {
    let row = e.target.parentNode.parentNode;
    surfacePrograms.splice(parseInt(row.id.replace("element", "")), 1); // remove program from list
    row.remove();
    let rows = document.getElementsByClassName("element-row");
    for (let i = 0; i < rows.length; i++) {
        rows[i].id = "element" + i.toString();
        rows[i].getElementsByClassName("el-number")[0].innerHTML = (i + 1).toString();
    }
}
