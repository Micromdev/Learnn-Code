const backbtn = document.getElementById("backbtn");

backbtn.addEventListener("click", function() {
    console.log("mi hai cliccato");
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", function() {
    let posY = window.scrollY;

    if(posY > 0) {
        backbtn.style.display = "block";
    } else {
        backbtn.style.display = "none";
    }
});