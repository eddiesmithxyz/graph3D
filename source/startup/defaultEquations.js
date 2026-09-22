const startEqs = [
    "$$ 3y^3=xz\\cos\\left(xyz+t\\right) $$", //"3y^3=xzcos(xyz+t)",
    `$$ 1=\\max\\left(\\left|xy\\right|,\\max\\left(\\left|xz\\right|,\\left|yz\\right|\\right)\\right) $$`, //"1=max(|xy|, max(|xz|, |yz|))",
    "yz=x\\left(y-z\\left)",
    "zy=5cos(xy+z)",
    "(2x^2-y^2)(2y^2-z^2)(2z^2-x^2)=(x^2+y^2+z^2-1)^2",
    "$$ 4\\left(\\phi^2x^2-y^2\\right)\\left(\\phi^2y^2-z^2\\right)\\left(\\phi^2z^2-x^2\\right)=\\left(1+2\\phi\\right)\\left(x^2+y^2+z^2-1\\right)^2 $$",
    "cos(x^2+y^2+z^2)=0.5",
    "4(\u03C6^2*x^2-y^2)(\u03C6^2*y^2-z^2)(\u03C6^2*z^2-x^2)=(1+2*\u03C6)(x^2+y^2+z^2-1)^2",
];

function loadDefaultEquations() {
    addElement(startEqs[0]);
    addElement("y=x^2-z^2", true);
    addElement(startEqs[1], true);
    addElement(startEqs[5], true);



    //const barthSextic = "4(1.61803^2*x^2-y^2)(1.61803^2*y^2-z^2)(1.61803^2*z^2-x^2)-(1+2*1.61803)(x^2+y^2+z^2-1)^2=0";
    //const batchSextic = "4(\\phi^2*x^2-y^2)(\\phi^2*y^2-z^2)(\\phi^2*z^2-x^2)=(1+2*\\phi)(x^2+y^2+z^2-1)^2";



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
