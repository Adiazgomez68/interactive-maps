const data = [
    {id: "0", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Antioquia", consejo: "16"},
    {id: "1", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Atlántico", consejo: "1"},
    {id: "2", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Bolívar", consejo: "7"},
    {id: "3", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Cauca", consejo: "27"},
    {id: "4", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Chocó", consejo: "60"},
    {id: "5", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Córdoba", consejo: "1"},
    {id: "6", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "La Guajira", consejo: "7"},
    {id: "7", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Magdalena", consejo: "3"},
    {id: "8", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Nariño", consejo: "51"},
    {id: "9", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Putumayo", consejo: "3"},
    {id: "10", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Risaralda", consejo: "2"},
    {id: "11", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Valle del Cauca", consejo: "46"},
    {id: "12", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Arauca", consejo: ""},
    {id: "13", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Cesar", consejo: ""},
    {id: "14", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Guaviare", consejo: ""},
    {id: "15", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Quindío", consejo: ""},
    {id: "16", comunidad: "Negra, Mulata, Afrodescendiente y Afrocolombiana", ubicacion: "Sucre", consejo: ""},
    {id: "17", comunidad: "Autoreconocimiento raizal", ubicacion: "San Andrés, Providencia y Santa Catalina", consejo: ""},
    {id: "18", comunidad: "Palenqueros", ubicacion: "Bolívar", consejo: ""}

]

var comunidades = document.querySelectorAll(".group-com"); 
var div = document.createElement("DIV")

function showInfo(data) {
    let consejo = "";
    let br = "";

    if (data.consejo !== "") {
        consejo = "<b> Consejo: </b> " + data.consejo;
        br = "<br>"
    } 

    div.innerHTML = `
        <b> Comunidad: </b> ${data.comunidad} <br>
        <b> Ubicación: </b> ${data.ubicacion} ${br} 
        ${consejo} <br>
    `
}

comunidades.forEach(el => {
    el.addEventListener("mouseover", (event) => {
        console.log(event)
        for (var i=0; i<data.length; i++) {
            if (data[i].id === event.target.id) {
                showInfo(data[i])
            }   
                           
        }   
    })
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        boundary: "viewport",
        template: `
            <div class="tooltip" role="tooltip" style="width: 20%">
                <div class="arrow"></div>
                <div class="tooltip-inner" 
                    style="
                        max-width: none;
                        background:rgb(235, 235, 235); 
                        color:black; 
                        box-shadow: rgb(207, 207, 207) .5px .5px 4px;
                        text-align: left;
                        font-family: verdana;
                        font-size: 12px;                         
                    ">
                </div>
            </div>`,
        title: div,
    })
})