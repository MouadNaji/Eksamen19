document.addEventListener("DOMContentLoaded", start)

let project;
async function start() {
    const json = await fetch("http://mouad.dk/kea2semester/Eksamen/wordpress//wp-json/wp/v2/projekter");
    project = await json.json();
    visProject();
}

let filter = "alle";


function visProject() {
    let liste = document.querySelector("#liste");
    liste.innerHTML = "";

    project.forEach(pro => {
        let template = `<div class="project"><img id="billede" src=${pro.billede.guid} alt="ret"><h2> ${pro.overskrift}</h2>${pro.lang_tekst}
læs mere...</div>`
        liste.insertAdjacentHTML("beforeend", template);

        liste.lastElementChild.addEventListener("click", () => {
            location.href = "project_post.html?id=" + pro.id;

        });
    });


};
