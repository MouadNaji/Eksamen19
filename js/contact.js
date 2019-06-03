document.addEventListener("DOMContentLoaded", hentData);
//her bliver der sørget for at den går igang med funktionen hentJson2 efter DOM er loaded

let info;


//Her hentes ringe

async function hentData() {
    //her startes en async funktion
    const dataUrl = "https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/kontakt/67";
    //her sættes link med rest api ind
    const dataJson = await fetch(dataUrl);
    //her hentes data filen som er lavet i wordpress
    info = await dataJson.json();
    //den hentede data skal tolkes som json

    showData();
    //her kaldes funktion der viser data i DOM
};

function showData() {

    console.log(info);




    document.querySelector("#contact_title").innerHTML += `


                    <h1>${info.overskrift}</h1>

            `






    document.querySelector("#map").innerHTML += `




<img src="${info.kort.guid}" alt="Om frolov og Savova">




            `

    document.querySelector("#text").innerHTML += `





             ${info.tekst}



            `


    document.querySelector("#social_box").innerHTML += `





                ${info.some_tekst}



            `

}
