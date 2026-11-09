const theme = document.querySelector("#theme")

theme.addEventListener("input", () => {
    document.body.style.backgroundColor=theme.value;
});