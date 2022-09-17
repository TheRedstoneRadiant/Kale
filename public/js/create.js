const paste = document.getElementById("paste");

window.onbeforeunload = function() {
    if (paste.value) {
        return true;
    }

    return null;
};