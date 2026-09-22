// Loads equations from URL query parameters, e.g.
// ?eq=xyz%3Dcosx&eq=y%3Dx%5E2-z%5E2&hidden=1
// "hidden" is an optional comma-separated list of 0-based indices (into
// the "eq" list) that should start hidden, mirroring hideElement().
// Returns true if at least one equation was loaded from the URL,
// false otherwise (caller should fall back to loadDefaultEquations()).
function loadEquationsFromURL() {
    let params = new URLSearchParams(window.location.search);
    let eqs = params.getAll("eq");

    if (eqs.length == 0)
        return false;

    let hiddenIndices = new Set();
    let hiddenParam = params.get("hidden");
    if (hiddenParam != null) {
        for (let indexStr of hiddenParam.split(",")) {
            let index = parseInt(indexStr, 10);
            if (!isNaN(index))
                hiddenIndices.add(index);
        }
    }

    for (let i = 0; i < eqs.length; i++) {
        addElement();
        document.getElementById("elementInput" + i.toString()).value = eqs[i];

        if (hiddenIndices.has(i)) {
            let row = document.getElementById("element" + i.toString());
            let rowIcon = row.querySelector(".el-icon");
            hideElement({ target: rowIcon });
        }
    }

    return true;
}
