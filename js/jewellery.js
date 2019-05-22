window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    chooseCategory();
});


function chooseCategory() {


    console.log(window.location.search);

    if (window.location.search == "?cat=rings") {

        openRings();

    }

    if (window.location.search == "?cat=wedding_rings") {

        openWeddingRings();

    }

    if (window.location.search == "?cat=ear_rings") {

        openEarRings();

    }

    if (window.location.search == "?cat=bracelets") {

        openBracelets();

    }


    if (window.location.search == "?cat=necklaces") {

        openNecklaces();

    }

    if (window.location.search == "?cat=gifts") {

        openGifts();

    }


}

function openRings() {
    console.log("rings");

    document.getElementById("rings").style.display = "block";

    tablinks = document.getElementsByClassName("tablinks");


}


function openWeddingRings() {
    console.log("weddingrings");

    document.getElementById("wedding_rings").style.display = "block";


}

function openEarRings() {
    console.log("earrings");

    document.getElementById("ear_rings").style.display = "block";


}

function openBracelets() {
    console.log("bracelets");

    document.getElementById("bracelets").style.display = "block";


}

function openNecklaces() {
    console.log("necklaces");

    document.getElementById("necklaces").style.display = "block";


}

function openGifts() {
    console.log("gifts");

    document.getElementById("gifts").style.display = "block";


}


function myMobileFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}




function filterFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


function openMobile(evt, eventName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(eventName).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById("myDropdown").classList.toggle("show");



}



function openDesktop(evt, eventName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(eventName).style.display = "block";
    evt.currentTarget.className += " active";
}


function onClick(element) {


    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}
