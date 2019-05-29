        let urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get("id");

        document.addEventListener("DOMContentLoaded", start)


        let projekter = [];


        async function start() {

            const json = await fetch("https://mouad.dk/kea2semester/Eksamen/wordpress//wp-json/wp/v2/projekter/");

            projekter = await json.json();
            visRetterne();

        }


        function visRetterne() {
            let liste = document.querySelector("#indhold");
            liste.innerHTML = "";

            projekter.forEach(pro => {
                if (id == pro.id) {
                    let template = `<div class="project"><h2> ${pro.overskrift}</h2><p>${pro.lang_tekst}</p><img id="billede" src=${pro.billede.guid} alt="ret"></div>`
                    liste.insertAdjacentHTML("beforeend", template);



                }

            });
            document.querySelector("#tilbage").addEventListener("click", () => {
                location.href = "projects.html"
            });
        };
