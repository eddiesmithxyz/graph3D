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
        addElement(eqs[i], hiddenIndices.has(i));
    }

    return true;
}

// Builds a shareable URL encoding the current equations (and any hidden
// rows) as URL parameters, matching the format read by
// loadEquationsFromURL().
function getShareURL() {
    let params = new URLSearchParams();
    let rows = document.getElementsByClassName("element-row");
    let hiddenIndices = [];

    for (let i = 0; i < rows.length; i++) {
        let input = document.getElementById("elementInput" + i.toString());
        params.append("eq", input.value);
        if (rows[i].getAttribute("data-visible") == "false")
            hiddenIndices.push(i);
    }

    if (hiddenIndices.length > 0)
        params.set("hidden", hiddenIndices.join(","));

    return window.location.origin + window.location.pathname + "?" + params.toString();
}

// Updates the address bar with the current state's shareable URL and
// copies it to the clipboard.
function shareCurrentState() {
    let url = getShareURL();
    history.replaceState(null, "", url);
    if (navigator.clipboard)
        navigator.clipboard.writeText(url).catch(function () { });
}
