const spacing = document.querySelector(".spacing")
const blur = document.querySelector(".blur")
const color = document.querySelector(".pick")
const footer = document.querySelector(".footer-wrapper")

function handleSpacing(e) {
    const x = e.target.value;

    footer.style.padding = x+"px";
}

function handleBlur(e) {
    const x = e.target.value;

    // console.log(x);

    footer.style.filter = `blur(${x}px)`
}

function handleColor(e) {
    const x = e.target.value;

    footer.style.background = x;
}

spacing.addEventListener("change", handleSpacing);
spacing.addEventListener("mousemove", handleSpacing);

blur.addEventListener("change", handleBlur);
blur.addEventListener("mousemove", handleBlur);

color.addEventListener("change", handleColor);
color.addEventListener("mousemove", handleColor);


