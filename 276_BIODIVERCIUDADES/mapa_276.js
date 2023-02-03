const data = [
    {id:"0", biodiverciudad: "Armenia", extension: "115 km² aprox.", altitud: "1386 m.s.n.m.", poblacion: "312.551", proyectos: "\n > Desarrollo de un instrumento metodológico para transformar ciudades en BiodiverCiudades. \n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros."},
    {id:"1", biodiverciudad: "Barrancabermeja", extension: "1274 km² aprox.", altitud: "76 m.s.n.m.", poblacion: "214.689", proyectos: "\n > Ciencia participativa en las Biodiverciudades- BioBlitz. \n > Desarrollo de un instrumento metodológico para transformar ciudades en BiodiverCiudades. \n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros."},
    {id:"2", biodiverciudad: "Barranquilla", extension: "166 km² aprox.", altitud: "24 m.s.n.m.", poblacion: "1.312.473", proyectos: "\n > Expedición científica con enfoque en bioeconomía en una BiodiverCiudad. \n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros *GEF Biodiverciudades."},
    {id:"3", biodiverciudad: "Bucaramanga", extension: "154 km² aprox.", altitud: "950 m.s.n.m.", poblacion: "618.967", proyectos: "\n > Proyecto de Ecoviveros."},
    {id:"4", biodiverciudad: "Leticia", extension: "702 km² aprox.", altitud: "80 m.s.n.m", poblacion: "52.003", proyectos: "\n > Ciencia participativa en las Biodiverciudades- BioBlitz. \n > Desarrollo de un instrumento metodológico para transformar ciudades en BiodiverCiudades. \n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros."},
    {id:"5", biodiverciudad: "Manizales", extension: " 477 km² aprox.", altitud: "2.146 m.s.n.m.", poblacion: "454.077", proyectos: "\n > Ciencia participativa en las Biodiverciudades- BioBlitz. \n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros."},
    {id:"6", biodiverciudad: "Medellín", extension: "387 km² aprox.", altitud: "1579 m.s.n.m.", poblacion: "2.612.958", proyectos: "\n > Proyecto de Ecoviveros."},
    {id:"7", biodiverciudad: "Montería", extension: "3043 km² aprox.", altitud: "11 m.s.n.m.", poblacion: "512.994", proyectos: "\n > Ciencia participativa en las Biodiverciudades- BioBlitz. \n > Desarrollo de un instrumento metodológico para transformar ciudades en BiodiverCiudades. \n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros. \n > GEF Biodiverciudades."},
    {id:"8", biodiverciudad: "Pasto", extension: "1131 km² aprox.", altitud: "2543 m.s.n.m.", poblacion: "393.009", proyectos: "\n > Ciencia participativa en las Biodiverciudades- BioBlitz. \n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros *GEF Biodiverciudades."},
    {id:"9", biodiverciudad: "Pereira", extension: "702 km² aprox.", altitud: "1.411 m.s.n.m", poblacion: "485.373", proyectos: "\n > Desarrollo de un instrumento metodológico para transformar ciudades en BiodiverCiudades \n > Proyecto de Ecoviveros."},
    {id:"10", biodiverciudad: "Quibdó", extension: " 3075 km² aprox.", altitud: "43 m.s.n.m.", poblacion: "132.918", proyectos: "\n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros."},
    {id:"11", biodiverciudad: "San Andrés y Providencia", extension: "27 km² aprox.", altitud: "12 m.s.n.m.", poblacion: "58.817", proyectos: "\n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros."},
    {id:"12", biodiverciudad: "Villavicencio", extension: "702 km² aprox.", altitud: "449 m.s.n.m", poblacion: "554.173", proyectos: "\n > Ciencia participativa en las Biodiverciudades- BioBlitz \n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros."},
    {id:"13", biodiverciudad: "Yopal", extension: " 2532 km² aprox.", altitud: "350 m.s.n.m", poblacion: "180.513", proyectos: "\n > Ciencia participativa en las Biodiverciudades- BioBlitz. \n > Desarrollo de un instrumento metodológico para transformar ciudades en BiodiverCiudades. \n > Proyecto de Monitoreo de la Calidad del Aire en las BiodiverCiudades. \n > Proyecto de Ecoviveros."}
]

var bio = document.querySelectorAll(".group-bio"); 
var div = document.createElement("DIV")

function showInfo(data) {
    div.innerHTML = `
        <b> Biodiverciudad: </b> ${data.biodiverciudad} <br>
        <b> Extensión: </b> ${data.extension} <br>
        <b> Altitud Media: </b> ${data.altitud} <br>
        <b> Población: </b> ${data.poblacion} <br>
        <b> Proyectos Realizados: </b> ${data.proyectos.replace(/\n/g, "<br />")}
    `
}

bio.forEach(el => {
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
                        background:rgb(250, 250, 250); 
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
