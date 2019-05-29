document.addEventListener("DOMContentLoaded", hentData);
//her bliver der sørget for at den går igang med funktionen hentJson2 efter DOM er loaded

let info;


//Her hentes ringe

async function hentData() {
    //her startes en async funktion
    const dataUrl = "https://mouad.dk/kea2semester/Eksamen/wordpress/wp-json/wp/v2/om_os/61";
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


    document.querySelector("#video_box").innerHTML += `


                    <h1>${info.overskrift}</h1>

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${info.video}" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

            `



    document.querySelector("#about_title").innerHTML += `


                    <h1>${info.overskrift2}</h1>

            `


    document.querySelector("#about_box1").innerHTML += `


<img src="${info.billede.guid}" alt="Om frolov og Savova">

             ${info.tekst1}



            `




    document.querySelector("#about_box2").innerHTML += `


<img src="${info.billede2.guid}" alt="Om frolov og Savova">

                 ${info.tekst2}



            `

}
