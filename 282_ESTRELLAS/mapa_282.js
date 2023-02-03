const data = [
    {id: "0", estrella: "Sierra Nevada de Santa Marta", departamentos: "Magdalena, Guajira y Cesar", dato: "La Sierra Nevada de Santa Marta se localiza alrededor de las coordenadas geográficas 10º49’N y 73º39’W. Según el IGAC (1996. Diccionario Geográfico de Colombia), su punto más alto se eleva hasta los 5775 m.s.n.m aproximadamente, en las cumbres gemelas Colón y Bolívar, siendo éstas las máximas alturas dentro del territorio nacional.", rios: "\n > Río Cesar. \n > Río Ranchería. \n > Río Aracataca. \n > Río Fundación. \n > Río Ariguaní"},
    {id: "1", estrella: "Nudo de Santurban", departamentos: "Norte de Santander y Santander", dato: "Extensión aproximada de 150.000 hectáreas, entre los 2.800 y 4290 m.s.n.m. La riqueza del área se fundamenta en su paisaje de pajonales, de rocas sólidas que bordean el complejo de lagunas, la variedad de especies florísticas y de la fauna especifica de este bioma, la conexión internacional con Maracaibo, su posición geográfica refuerza el valor hídrico, en primer lugar por las lluvias y por los numerosos ríos se originan en el área del páramo, las cuales se convierten en escorrentía superficial o recargan los acuíferos de los valles intermontanos y el piedemonte de la cordillera.", rios: "\n > Río Zulia. \n > Río Lebrija."},
    {id: "2", estrella: "Nudo del Paramillo", departamentos: "Antioquia y Córdoba", dato: "Tiene una extensión de 504.014 hectáreas que conservan ecosistemas de selva húmeda tropical, planos inundables, bosques andinos y subandinos,  humedales y paramos que se distribuyen en pisos altitudinales  que oscilan entre los 125 m.s.n.m en su parte norte hasta los  3.960 m.s.n.m en su parte sur.", rios: "\n > Rio Sinú. \n > Rio Leon. \n > Rio San Jorge. \n > Rio Sucio"},
    {id: "3", estrella: "Cerro Caramanta", departamentos: "Antioquia", dato: "Ubicado en la cordillera Occidental, posee una extensión de 82 kilómetros cuadrados. 2050 m.s.n.m.", rios: "\n > Río San Juan. \n > Río Atrato."},
    {id: "4", estrella: "Páramo de guachaneque", departamentos: "Cundinamarca", dato: "Es una reserva forestal y macizo montañoso donde se inicia el nacimiento del río Bogotá, ubicado a 9,5 kilómetros del municipio de Villapinzón en el departamento de Cundinamarca en Colombia, tiene una altitud de 3300 m.s.n.m. y cubre una extensión de 10 000 hectáreas", rios: "\n > Río Bogotá. \n > Río Upía. \n > Río Sogamoso. \n > Río Blanco. \n > Río Guatiquia. \n > Río Negro. \n > Río Opon."},
    {id: "5", estrella: "Estella Fluvial de Inírida", departamentos: "Guainía y Vichada", dato: "La Estrella Fluvial de Inírida fue designada como sitio Ramsar el 8 de julio de 2014 debido a su deversidad en aguas, especies de plantas y animales, a sus culturas indígenas y a sus ecosistemas singulares. La designación cubre 253.000 ha. En la Estrella Fluvial hay 900 especies de plantas, más de 470 de aves (60% de las que se encuentran en la Orinoquía colombiana), más de 470 de peces (50% de las especies que se encuentran en la Cuenca del río Orinoco), 200 de mamíferos y 40 de anfibios. Esta es una zona de transición entre las sabanas de la Orinoquía y las selvas de la Amazonía habitada por 22 comunidades indígenas y los colonos que viven en el área.", rios: "\n > Río Guaviare. \n > Río Atabapo. \n > Río Inírida."},
    {id: "6", estrella: "Paramo de Sumapaz", departamentos: "Cundinamarca", dato: "Tiene una extensión es de 178.000 hectáreas,  y es una de las fuentes hídricas con mayor importancia en el país, en este ecosistema habitan especies como el venado de cola blanca, águilas, osos de ante ojos, entre otros y la especie de mayor relevancia en cuanto a flora es el frailejón.", rios: "\n > Río Guayabero. \n > Río Cabrera. \n > Afluentes de los ríos Metas y Guaviare."},
    {id: "7", estrella: "Macizo Colombiano", departamentos: "Cauca, Nariño y Huila", dato: "Es la estrella fluvial más importante, El macizo Colombiano lo componen 362 lagunas y 13 páramos.Su extensión total es de 3 268 237 Hectáreas, que están distribuidas así: 1 371 613 ha de bosques; 1 542 313 ha de agroecosistemas; 256 685 ha correspondientes a páramos; 4342 ha pertenecientes a la zona nival; 92 432 ha con vegetación xerofítica, y 856 ha en asentamientos urbanos. Cuenta con alturas que varían entre los 2600 y 4700 msnm.", rios: "\n > Río Cauca. \n > Río Magdalena. \n > Río Caquetá. \n > Río Patía."},
    {id: "8", estrella: "Nudo de los Pastos o Huaca", departamentos: "Nariño", dato: "Abarca la intrincada región montañosa donde la cordillera de los Andes se bifurca en dos ramas al entrar a Colombia: la Cordillera Occidental y la Cordillera Central.El gran nudo de la cordillera andina encierra un potencial volcánico de proporciones gigantescas. Chiles se levantan a 4.840 metros; Pasto o Galeras a 4.100; Sotará a 4.600, Cumbal a 4.890.", rios: "\n > Río Putumayo. \n > Rio Mira."},
]


var stars = document.querySelectorAll(".group-str");
var rivers = document.querySelectorAll(".river");
var div = document.createElement("DIV");

function showInfo(data) {
    rivers.forEach(el => {
        if (el.id === data.id) {
            el.style.display = "block";
        }
    }) 

    div.innerHTML = `
        <b> Estrella: </b> ${data.estrella} <br>
        <b> Departamentos: </b> ${data.departamentos} <br>
        <b> Dato de Extensión: </b> ${data.dato} <br>
        <b> Ríos que le nacen: </b> ${data.rios.replace(/\n/g, "<br />")}
    `
}

stars.forEach(el => {
    el.addEventListener("mouseover", (event) => {
        console.log(event)
        for (var i=0; i<data.length; i++) {
            if (data[i].id === event.target.id) {
                showInfo(data[i])
            }               
        }  
    })
    el.addEventListener("mouseout", (event) => {
        rivers.forEach(element => {
            element.style.display = "none";
        }) 
    })
    el.addEventListener("focus", (event) => {})
})

/* document.body.addEventListener('click', (e) => {
    const element = e.target;
    
    if (!data.find(dep => dep.id === element.id)){
        rivers.forEach(element => {
            element.style.display = "none";
        }) 
    }
}) */

$(function () {
    $('[data-toggle="popover"]').popover({
        boundary: 'viewport',
        content: div,
        html: true,
        template: `
            <div class="popover" role="tooltip" style="max-width: none; width: 28%;">
                <div class="arrow"></div>
                <h3 class="popover-header"></h3>
                <div class="popover-body" style="
                    text-align: justify; 
                    background-color: rgba(248, 248, 248);
                    border-radius: 8px 8px;
                    box-shadow: rgb(207, 207, 207) .5px .5px 4px;
                ">
                </div>
            </div>
        `,
        trigger: 'hover focus'
    })
})

/* $(function () {
    $('[data-toggle="tooltip"]').tooltip({
        boundary: "viewport",
        template: `
            <div class="tooltip" role="tooltip" style="width: 28%">
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
        trigger: "click"
    })
})
 */
