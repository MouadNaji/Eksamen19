//document.querySelector("transition").addEventListener("click", transitionOut);

function delay(URL) {
    setTimeout(function () {
        window.location = URL
    }, 800);
}

function transitionOut() {

    document.querySelector("body").classList.add("fade_out");

}
