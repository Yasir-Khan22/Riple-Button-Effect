const btnElem = document.querySelector(".btn");

btnElem.addEventListener("mouseover", (event) => {
    const xOffSet = (event.pageX - btnElem.offsetLeft)
    const yOffSet = (event.pageY - btnElem.offsetTop)
})