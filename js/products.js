document.addEventListener("DOMContentLoaded", hentTekst);
//her bliver der sørget for at den går igang med funktionen hentJson2 efter DOM er loaded

let smykker;


//Her hentes ringe

async function hentTekst() {
    //her startes en async funktion
    const tekstUrl = "https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/smykke-kategorien/78";
    //her sættes link med rest api ind
    const tekstJson = await fetch(tekstUrl);
    //her hentes data filen som er lavet i wordpress
    smykker = await tekstJson.json();
    //den hentede data skal tolkes som json

    showTekst();
    //her kaldes funktion der viser data i DOM
};

function showTekst() {



    document.querySelector("#about_products").innerHTML += `




                    <h1>${smykker.title.rendered}</h1>

<p class="text">${smykker.content.rendered}</p>
            `


    hentRinge();

}



//Her hentes ringe

async function hentRinge() {
    //her startes en async funktion
    const ringsUrl = "https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/smykke-kategorien/40";
    //her sættes link med rest api ind
    const ringJson = await fetch(ringsUrl);
    //her hentes data filen som er lavet i wordpress
    smykker = await ringJson.json();
    //den hentede data skal tolkes som json

    showRings();
    //her kaldes funktion der viser data i DOM
};

function showRings() {



    document.querySelector(".rings").innerHTML += `


<img src="${smykker.kategori_billede.guid}" alt="Ringe">

<div class="overlay_large">
                    <p class="text">${smykker.title.rendered}</p>
                </div>`


    hentWeddingRinge();

}







//Her hentes vielsesringe





async function hentWeddingRinge() {
    //her startes en async funktion
    const weddingRingsUrl = "https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/smykke-kategorien/41";
    //her sættes link med rest api ind
    const weddingRingJson = await fetch(weddingRingsUrl);
    //her hentes data filen som er lavet i wordpress
    smykker = await weddingRingJson.json();
    //den hentede data skal tolkes som json

    showWeddingRings();
    //her kaldes funktion der viser data i DOM
};

function showWeddingRings() {



    document.querySelector(".wedding_rings").innerHTML += `


<img src="${smykker.kategori_billede.guid}" alt="Ringe">

<div class="overlay_small">
                    <p class="text">${smykker.title.rendered}</p>
                </div>`

    hentEarRings();

}









//Her hentes øreringe









//Her hentes ringe




async function hentEarRings() {
    //her startes en async funktion
    const earRingsUrl = "https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/smykke-kategorien/42";
    //her sættes link med rest api ind
    const earRingJson = await fetch(earRingsUrl);
    //her hentes data filen som er lavet i wordpress
    smykker = await earRingJson.json();
    //den hentede data skal tolkes som json

    showEarRings();
    //her kaldes funktion der viser data i DOM
};

function showEarRings() {



    document.querySelector(".ear_rings").innerHTML += `


<img src="${smykker.kategori_billede.guid}" alt="Ringe">

<div class="overlay_small">
                    <p class="text">${smykker.title.rendered}</p>
                </div>`

    hentNecklaces();
}


//Her hentes halskæder



async function hentNecklaces() {
    //her startes en async funktion
    const necklacesUrl = "https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/smykke-kategorien/44";
    //her sættes link med rest api ind
    const necklacesJson = await fetch(necklacesUrl);
    //her hentes data filen som er lavet i wordpress
    smykker = await necklacesJson.json();
    //den hentede data skal tolkes som json

    showNecklaces();
    //her kaldes funktion der viser data i DOM
};

function showNecklaces() {



    document.querySelector(".necklaces").innerHTML += `


<img src="${smykker.kategori_billede.guid}" alt="Ringe">

<div class="overlay_small">
                    <p class="text">${smykker.title.rendered}</p>
                </div>`

    hentBracelets();

}







//Her hentes armbånd


async function hentBracelets() {
    //her startes en async funktion
    const braceletsUrl = "https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/smykke-kategorien/43";
    //her sættes link med rest api ind
    const braceletsJson = await fetch(braceletsUrl);
    //her hentes data filen som er lavet i wordpress
    smykker = await braceletsJson.json();
    //den hentede data skal tolkes som json

    showBracelets();
    //her kaldes funktion der viser data i DOM
};

function showBracelets() {



    document.querySelector(".bracelets").innerHTML += `


<img src="${smykker.kategori_billede.guid}" alt="Ringe">

<div class="overlay_large">
                    <p class="text">${smykker.title.rendered}</p>
                </div>`

    hentGifts();

}



//Her hentes gave-ideer



async function hentGifts() {
    //her startes en async funktion
    const giftsUrl = "https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/smykke-kategorien/45";
    //her sættes link med rest api ind
    const giftsJson = await fetch(giftsUrl);
    //her hentes data filen som er lavet i wordpress
    smykker = await giftsJson.json();
    //den hentede data skal tolkes som json

    showGifts();
    //her kaldes funktion der viser data i DOM
};

function showGifts() {



    document.querySelector(".gifts").innerHTML += `


<img src="${smykker.kategori_billede.guid}" alt="Ringe">

<div class="overlay_small">
                    <p class="text">${smykker.title.rendered}</p>
                </div>`

}
