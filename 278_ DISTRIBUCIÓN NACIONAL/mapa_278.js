const datas = [
    {id: "0", departamento: "Arauca", nodos: "4", latitud: "6,79306", longitud: "-71,77138", correo: "rnjaarauca@gmail.com", redes: "@rnjaarauca"},
    {id: "1", departamento: "Amazonas", nodos: "1", latitud: "-4,2081", longitud: "-69,9432", correo: "rnjaamazonas@gmail.com", redes: ""},
    {id: "2", departamento: "Antioquia", nodos: "1", latitud: "", longitud: "", correo: "rnjaantioquia@gmail.com", redes: "@rnjantioquia"},
    {id: "3", departamento: "Atlántico", nodos: "8", latitud: "10,9878", longitud: "-74,7889", correo: "rnjaatlantico@gmail.com", redes: "@rnjaatlantico"},
    {id: "4", departamento: "Bogotá", nodos: "6", latitud: "4,64361", longitud: "-74,1533", correo: "rnjabogota@gmail.com", redes: "@rnjabogota"},
    {id: "5", departamento: "Bolívar", nodos: "2", latitud: "10,39972", longitud: "-75,51444", correo: "rnjabolivar@gmail.com", redes: "@rnjabolivar"},
    {id: "6", departamento: "Boyacá", nodos: "12", latitud: "5,717", longitud: "-72,917", correo: "rnjaboyaca@gmail.com", redes: "@rnjaboyaca"},
    {id: "7", departamento: "Caldas", nodos: "13", latitud: "5,06611", longitud: "-75,48472", correo: "rnjacaldas@gmail.com", redes: "@rnja.caldas"},
    {id: "8", departamento: "Casanare", nodos: "12", latitud: "", longitud: "", correo: "rnjacasanare@gmail.com", redes: "@rnjacasanare1"},
    {id: "9", departamento: "Caquetá", nodos: "4", latitud: "", longitud: "", correo: "rnjacaqueta@gmail.com", redes: "@rnjacaqueta"},
    {id: "10", departamento: "Cauca", nodos: "3", latitud: "2,55", longitud: "-76,067", correo: "rnjacauca@gmail.com", redes: "@rnjacauca"},
    {id: "11", departamento: "Cesár", nodos: "4", latitud: "10,46027", longitud: "-73,25972", correo: "rnjacesar@gmail.com", redes: "@rnjacesar"},
    {id: "12", departamento: "Chocó", nodos: "1", latitud: "", longitud: "", correo: "rnjachoco@gmail.com", redes: "@rnjachoco"},
    {id: "13", departamento: "Córdoba", nodos: "6", latitud: "8,76", longitud: "-75,88555", correo: "rnjacordoba@gmail.com", redes: "@rnjacordoba"},
    {id: "14", departamento: "Cundinamarca", nodos: "8", latitud: "", longitud: "", correo: "rnjacundinamarca@gmail.com", redes: "@rnjacundinamarca"},
    {id: "15", departamento: "Guaviare", nodos: "2", latitud: "", longitud: "", correo: "rnjaguaviare@gmail.com", redes: "@rnjaguaviare"},
    {id: "16", departamento: "Huila", nodos: "2", latitud: "3,153055", longitud: "-75,0525", correo: "rnjahuila@gmail.com", redes: "@rnjahuila"},
    {id: "17", departamento: "La guajira",    nodos: "7", latitud: "11,775", longitud: "-72,44444", correo: "rnjalaguajira@gmail.com", redes: "@rnjalaguajira"},
    {id: "18", departamento: "Magdalena", nodos: "3", latitud: "11,23611", longitud: "-74,20166", correo: "rnjamagdalena@gmail.com", redes: "@rnjamagdalena"},
    {id: "19", departamento: "Meta", nodos: "27", latitud: "4,1425", longitud: "-73,6294", correo: "rnjameta@gmail.com", redes: "@rnjameta"},
    {id: "20", departamento: "Nariño", nodos: "11", latitud: "1,21", longitud: "-77,27472", correo: "rnjanariño1@gmail.com", redes: "@rnjanarino"},
    {id: "21", departamento: "Norte de santander", nodos: "3", latitud: "", longitud: "", correo: "rnjanortedesantander@gmail.com", redes: ""},
    {id: "22", departamento: "Putumayo", nodos: "2", latitud: "", longitud: "", correo: "rnjaputumayo@gmail.com", redes: ""},
    {id: "23", departamento: "Santander", nodos: "73", latitud: "", longitud: "", correo: "rnjasantander@gmail.com", redes: "@rnjasantander"},
    {id: "24", departamento: "Risaralda", nodos: "1", latitud: "", longitud: "", correo: "rnjarisaralda@gmail.com", redes: "@rnja.risaralda"},
    {id: "25", departamento: "San Andrés, Providencia y Santa Catalina", nodos: "1", latitud: "", longitud: "", correo: "rnjasanandres@gmail.com", redes: ""},
    {id: "26", departamento: "Sucre", nodos: "5", latitud: "9,29944", longitud: "-75,39583", correo: "rnjasucre@gmail.com", redes: "@rnjasucre"},
    {id: "27", departamento: "Tolima", nodos: "12", latitud: "4,43777", longitud: "-75,20055", correo: "rnjatolima@gmail.com", redes: "@rnja.tolima"},
    {id: "28", departamento: "Valle del cauca", nodos: "6", latitud: "3,26083", longitud: "-76,53944", correo: "rnjavalle@gmail.com", redes: "@rnjavalle"},
]


var departments = document.querySelectorAll(".st2");
var box = document.querySelector(".text-box");

departments.forEach(el => {
    el.addEventListener("click", (event) => {
        
        const departmentElement = event.target;
        const {x,y} = departmentElement.getBoundingClientRect();

        for (var i=0; i<datas.length; i++) {
            if (datas[i].id === event.target.id) {
                showInfo(datas[i],{x,y})
            }
        }   
    })
});

var div = document.createElement("DIV")

function showInfo(data, position) {
    let redesSociales = "";

    if (data.redes !== "") {
        redesSociales = "<b> Red Social (instagram): </b> " + data.redes;
    } 

    div.innerHTML = `
        ${data.departamento === "Bogotá" ? 
            (
                `<b> Distrito: </b> ${data.departamento}`
            ) : (
                `<b> Departamento: </b> ${data.departamento}`
            )
        }
        <br><br>
        <b> Nodo: </b> ${data.nodos} <br><br>
        <b> Correo Electrónico: </b> ${data.correo} <br><br>
        ${redesSociales} 
    `
    box.style = `visibility: visible; opacity: 1; left:${position.x+60}px; top:${position.y-40}px`;
}

box.appendChild(div);


function hideInfo() {
    box.style.visibility = "hidden"; 
    box.style.opacity = "0";
}

document.body.addEventListener('click', (e) => {
    const element = e.target;
   
    if (!datas.find(dep => dep.id === element.id)){
        hideInfo();
    }
})

