const paste = document.getElementById("paste");
let fontSize = 10;

window.onbeforeunload = () => {
    return paste.value ? true : null;
};

const zoom = (event) => {
    if (!event.ctrlKey) return;
    event.preventDefault();

    fontSize += event.deltaY * -0.01;
    fontSize = Math.min(Math.max(10, fontSize), 80);

    paste.style.fontSize = `${fontSize}px`;
}

window.addEventListener('wheel', zoom, {passive: false})