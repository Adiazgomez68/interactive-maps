const data = [
    {id: "0", departamento: "Córdoba", tipoSVCA: "Municipal", municipio: "Montería", estaciones: "5", tiposEst: "4 fijas. 1 Indicativa", variables: "PM10, O3, SO2, CO, PM2.5, NO2"},
    {id: "1", departamento: "Antioquia", tipoSVCA: "Metropolitano", municipio: "Medellín", estaciones: "33", tiposEst: "25 fijas.", variables: "PM10, O3, CO, PM2.5, T10, NO2, SO2"},
    {id: "2", departamento: "Aráuca", tipoSVCA: "Municipal", municipio: "Aráuca", estaciones: "1", tiposEst: "1 Indicativa", variables: "PM10 y CO"},
    {id: "3", departamento: "Atlántico", tipoSVCA: "Metropolitano", municipio: "Barranquilla, Puerto Colombia, Soledad y Malambo", estaciones: "12", tiposEst: "8 fijas. 4 Indicativas", variables: "PM10, O3, SO2, CO, T10, PM2.5, NO2"},
    {id: "4", departamento: "Bogotá D.C.", tipoSVCA: "Metropolitano", municipio: "Bogotá D.C.", estaciones: "26", tiposEst: "21 fijas. 5 Indicativas", variables: "PM10, O3, SO2, CO, PM2.5, NO2"},
    {id: "5", departamento: "Caldas", tipoSVCA: "Municipal", municipio: "Manizales", estaciones: "8", tiposEst: "7 fijas. 1 Indicativa", variables: "PM10, O3, SO2, CO, PM2.5"},
    {id: "6", departamento: "Casanare", tipoSVCA: "Municipal", municipio: "Yopal", estaciones: "1", tiposEst: "1 Indicativa", variables: "PM10"},
    {id: "7", departamento: "Cauca", tipoSVCA: "Municipal", municipio: "Popayán", estaciones: "3", tiposEst: "3 Indicativas", variables: "PM10, O3, T10, PM2.5"},
    {id: "8", departamento: "Cesar", tipoSVCA: "Municipal", municipio: "Valledupar", estaciones: "5", tiposEst: "2 fijas. 3 Indicativas", variables: "PM10 y PM2.5"},
    {id: "9", departamento: "Chocó", tipoSVCA: "Municipal", municipio: "Quibdo", estaciones: "1", tiposEst: "1 Indicativa", variables: "Varible Indefinida "},
    {id: "10", departamento: "Huila", tipoSVCA: "Municipal", municipio: "Neiva", estaciones: "5", tiposEst: "1 fija. 4 Indicativa", variables: "PM10, PM2.5"},
    {id: "11", departamento: "Guajira", tipoSVCA: "Municipal", municipio: "Riohacha", estaciones: "3", tiposEst: "3 Indicativas", variables: "T10 y Variables Indefinidas"},
    {id: "12", departamento: "Magdalena", tipoSVCA: "Municipal", municipio: "Santa Marta", estaciones: "16", tiposEst: "15 fijas. 1 Indicativa", variables: "PM10, O3, SO2, CO, T10, PM2.5, NO2"},
    {id: "13", departamento: "Meta", tipoSVCA: "Municipal", municipio: "Villavicencio", estaciones: "3", tiposEst: "3 fijas.", variables: "PM10, O3, SO2, T10, NO2"},
    {id: "14", departamento: "Nariño", tipoSVCA: "Municipal", municipio: "Pasto", estaciones: "2", tiposEst: "1 fija. 1 Indicativa", variables: "PM2.5 y Variables Identificadas"},
    {id: "15", departamento: "Santander", tipoSVCA: "Municipal", municipio: "Cúcuta", estaciones: "6", tiposEst: "3 fijas. 3 Indicativas", variables: "PM10 y PM2.5"},
    {id: "16", departamento: "Quindío", tipoSVCA: "Municipal", municipio: "Armenia", estaciones: "4", tiposEst: "1 fija. 3 Indicativas", variables: "PM10,PM2.5 y Variables Indefinidas "},
    {id: "17", departamento: "Norte de Santander", tipoSVCA: "Municipal", municipio: "Bucaramanga", estaciones: "13", tiposEst: "8 fijas. 5 Indicativas", variables: "PM10, O3, SO2, CO, PM2.5, T10, NO2"},
    {id: "18", departamento: "Tolima", tipoSVCA: "Municipal", municipio: "Ibagué", estaciones: "3", tiposEst: "3 fijas.", variables: "PM10"},
    {id: "19", departamento: "Valle de Cauca", tipoSVCA: "Municipal", municipio: "Cali", estaciones: "11", tiposEst: "11 fijas.", variables: "PM10, O3, SO2, T10, PM2.5, NO2"},
]

var caps = document.querySelectorAll(".group-cap"); 
var div = document.createElement("DIV");

function showInfo(data) {
    div.innerHTML = `
        <table class="table table-striped table-bordered">
            <body>
                <tr>
                    <th scope="row"> Departamento: </th>
                    <td> ${data.departamento} </td>
                </tr>
                <tr>
                    <th scope="row"> Tipo de SVCA: </th>
                    <td> ${data.tipoSVCA} </td>
                </tr>
                <tr>
                    <th scope="row"> Municipio: </th>
                    <td> ${data.municipio} </td>
                </tr>
                <tr>
                    <th scope="row"> Número de estaciones: </th>
                    <td> ${data.estaciones} </td>
                </tr>
                <tr>
                    <th scope="row"> Variables que mide el SVCA: </th> 
                    <td> ${data.variables} </td>
                </tr>
            </body>
        </table>
    `
}

caps.forEach(el => {
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
            <div class="tooltip" role="tooltip" style="width: 23%">
                <div class="arrow"></div>
                <div class="tooltip-inner" 
                    style="
                        max-width: none;
                        background:rgb(255, 255, 255); 
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

