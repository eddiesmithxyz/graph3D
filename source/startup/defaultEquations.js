const startEqs = [
    "xyz=cosx",
    "1=max(|xy|, max(|xz|, |yz|))",
    "yz=x(y-z)",
    "zy=5cos(xy+z)",
    "(2x^2-y^2)(2y^2-z^2)(2z^2-x^2)=(x^2+y^2+z^2-1)^2",
    "3y^3=xzcos(xyz+t)",
    "cos(x^2+y^2+z^2)=0.5",
    "4(\u03C6^2*x^2-y^2)(\u03C6^2*y^2-z^2)(\u03C6^2*z^2-x^2)=(1+2*\u03C6)(x^2+y^2+z^2-1)^2",
];

function loadDefaultEquations() {
    addElement();
    document.getElementById("elementInput0").value = startEqs[5];

    // i didn't write element hiding to be triggered programmatically. currently bodging this for a better demo
    addElement();
    let row = document.getElementById("elementInput1");
    row.value = "y=x^2-z^2";
    let rowIcon = row.parentElement.parentElement.querySelector(".el-icon");
    hideElement({ target: rowIcon });

    addElement();
    row = document.getElementById("elementInput2");
    row.value = startEqs[1];
    rowIcon = row.parentElement.parentElement.querySelector(".el-icon");
    hideElement({ target: rowIcon });

    addElement();
    row = document.getElementById("elementInput3");
    row.value = startEqs[4];
    rowIcon = row.parentElement.parentElement.querySelector(".el-icon");
    hideElement({ target: rowIcon });



    //const barthSextic = "4(1.61803^2*x^2-y^2)(1.61803^2*y^2-z^2)(1.61803^2*z^2-x^2)-(1+2*1.61803)(x^2+y^2+z^2-1)^2=0";
    //const batchSextic = "4(φ^2*x^2-y^2)(φ^2*y^2-z^2)(φ^2*z^2-x^2)=(1+2*φ)(x^2+y^2+z^2-1)^2";



    // performance test
    // addElement();
    // document.getElementById("elementInput1").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput2").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput3").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput4").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput5").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput6").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput7").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput8").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput9").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput10").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput11").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput12").value = "y=cos(|z+ysin(x)|)";
    // addElement();
    // document.getElementById("elementInput13").value = "y=cos(|z+ysin(x)|)";


}
