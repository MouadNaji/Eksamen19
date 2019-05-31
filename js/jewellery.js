let photo = [];
let filter = "Ringe"

let destRings = document.querySelector("#ring_insert");
let destWeddingRings = document.querySelector("#wedding_ring_insert");
let destEarRings = document.querySelector("#ear_ring_insert");
let destBracelet = document.querySelector("#bracelet_insert");
let destNecklace = document.querySelector("#necklace_insert");
let destGifts = document.querySelector("#gift_insert");



window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    start();
});




function start() {

    console.log("test");


    async function getJson() {


        let jsonData = await fetch("https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/smykker?per_page=100");
        photos = await jsonData.json();
        showRings();

    }



    function showRings() {
        destRings.innerHTML = "";


        photos.forEach(photo => {

            console.log(photo.category);

            if (photo.category == "Ringe") {



                let template =
                    `


                            <img src="${photo.smykkebillede.guid}"
                             onclick="onClick(this)"

                            alt="${photo.title.rendered}">

                        </div>
                        </div>                    `;
                destRings.insertAdjacentHTML("beforeend", template);



            }


            if (photo.category == "Vielsesringe") {



                let template =
                    `


                            <img src="${photo.smykkebillede.guid}"
                             onclick="onClick(this)"

                            alt="${photo.title.rendered}">

                        </div>
                        </div>                    `;
                destWeddingRings.insertAdjacentHTML("beforeend", template);



            }

            if (photo.category == "Øreringe") {



                let template =
                    `


                            <img src="${photo.smykkebillede.guid}"
                             onclick="onClick(this)"

                            alt="${photo.title.rendered}">

                        </div>
                        </div>                    `;
                destEarRings.insertAdjacentHTML("beforeend", template);



            }
            if (photo.category == "Halskæder") {



                let template =
                    `


                            <img src="${photo.smykkebillede.guid}"
                             onclick="onClick(this)"

                            alt="${photo.title.rendered}">

                        </div>
                        </div>                    `;
                destNecklace.insertAdjacentHTML("beforeend", template);



            }
            if (photo.category == "Armbånd") {



                let template =
                    `


                            <img src="${photo.smykkebillede.guid}"
                             onclick="onClick(this)"

                            alt="${photo.title.rendered}">

                        </div>
                        </div>                    `;
                destBracelet.insertAdjacentHTML("beforeend", template);



            }

            if (photo.category == "Gaver") {



                let template =
                    `


                            <img src="${photo.smykkebillede.guid}"
                             onclick="onClick(this)"

                            alt="${photo.title.rendered}">

                        </div>
                        </div>                    `;
                destGifts.insertAdjacentHTML("beforeend", template);



            }


        })
    }





    getJson();

    chooseCategory();
}









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

    document.querySelector(".ringlink").classList.add("active");


    document.getElementById("rings").style.display = "block";

    tablinks = document.getElementsByClassName("tablinks");


}


function openWeddingRings() {
    console.log("weddingrings");

    document.querySelector(".weddingringlink").classList.add("active");


    document.getElementById("wedding_rings").style.display = "block";


}

function openEarRings() {
    console.log("earrings");

    document.querySelector(".earringlink").classList.add("active");

    document.getElementById("ear_rings").style.display = "block";


}

function openBracelets() {
    console.log("bracelets");

    document.querySelector(".braceletlink").classList.add("active");

    document.getElementById("bracelets").style.display = "block";


}

function openNecklaces() {
    console.log("necklaces");

    document.querySelector(".necklacelink").classList.add("active");

    document.getElementById("necklaces").style.display = "block";


}

function openGifts() {
    console.log("gifts");

    document.querySelector(".giftlink").classList.add("active");

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

    document.querySelector("html, body").style.overflowY = "hidden";
    document.querySelector("#img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

function offClick(element) {

    document.querySelector("html, body").style.overflowY = "scroll";
    document.getElementById("modal01").style.display = "none";
}
