const btnElem = document.querySelector(".btn");

btnElem.addEventListener("mouseover", (e) => {

    const x = (e.pageX - btnElem.offsetLeft);
    const y = (e.pageY - btnElem.offsetTop);


    btnElem.style.setProperty("--xPos", x + "rem");
    btnElem.style.setProperty("--yPos", y + "rem");
})