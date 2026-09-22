function resizeGLCanvas() {
    let canvas = document.getElementById("glCanvas");
    let gl = canvas.getContext("webgl2");
    let dpr = window.devicePixelRatio || 1;
    gl.canvas.width = canvas.clientWidth * dpr;
    gl.canvas.height = canvas.clientHeight * dpr;
}

let oldWindowWidth = 0;
function onWindowResize() {
    let epWidthPreportion = epWidth / oldWindowWidth;
    updateEPWidth(epWidthPreportion * window.innerWidth);
    oldWindowWidth = window.innerWidth;
    resizeGLCanvas();
}
