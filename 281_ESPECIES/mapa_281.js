const data = [
    {id: "0", n_cientifico: " Micrurus camilae", n_comun: "Coralillo", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Andina-Caribe"},
    {id: "1", n_cientifico: "Saguinus oedipus", n_comun: "Titi cabeciblanco", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "2", n_cientifico: "Mesoclemmys dahli", n_comun: "Carranchina", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "3", n_cientifico: "Podocnemis lewyana", n_comun: "Tortuga del Río Magdalena", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "4", n_cientifico: "Potamotrygon magdalenae", n_comun: "Raya del Magdalena", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "5", n_cientifico: "Ptychoglossus bicolor", n_comun: "Lisa", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "6", n_cientifico: "Ptychoglossus romaleos", n_comun: "Lisa", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "7", n_cientifico: "Anolis antonii", n_comun: "Abaniquillo de gula rosa", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "8", n_cientifico: "Anolis mariarum", n_comun: "Anolis manchado", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "9", n_cientifico: "Anolis concolor", n_comun: "Lagarto de San Andrés", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región insular Caribe (San Andrés)"},
    {id: "10", n_cientifico: "Anolis pinchoti", n_comun: "Anolis de cayo cangrejo", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región insular Caribe (Providencia)"},
    {id: "11", n_cientifico: "Anolis sulcifrons", n_comun: "Anolis estriado", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "12", n_cientifico: "Anolis santamartae", n_comun: "Anolis de Santa Marta", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "13", n_cientifico: "Anolis menta", n_comun: "Camaleon", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "14", n_cientifico: "Anolis solitarius", n_comun: "Anolis solitario", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "15", n_cientifico: "Anolis umbrivagus", n_comun: "Camaleon", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "16", n_cientifico: "Anolis paravertebralis", n_comun: "Camaleon", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "17", n_cientifico: "Anadia pulchella", n_comun: "Lagartija", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "18", n_cientifico: "Anadia altaserrania", n_comun: "Lagartija", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "19", n_cientifico: "Mabuya pergravis", n_comun: "Lisa", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región insular Caribe (Providencia)"},
    {id: "20", n_cientifico: "Mabuya berengerae", n_comun: "Lisa", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región insular Caribe (San Andrés)"},
    {id: "21", n_cientifico: "Lepidoblepharis colombianus", n_comun: "Lagartija", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "22", n_cientifico: "Lepidoblepharis miyatai", n_comun: "Gecko enano colombiano", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "23", n_cientifico: "Sphaerodactylus heliconiae", n_comun: "Gecko enano", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "24", n_cientifico: "Pseudogonatodes furvus", n_comun: "Gecko de garras colombiano", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "25", n_cientifico: "Cnemidophorus gaigei", n_comun: "Lobito", estado: "NE- No Evaluado", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "26", n_cientifico: "Amphisbaena medemi", n_comun: "Culebra ciega", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "27", n_cientifico: "Coniophanes andresensis", n_comun: "Culebra de San Andrés", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región insular Caribe (San Andrés)"},
    {id: "28", n_cientifico: "Helicops danieli", n_comun: "Mapaná de agua", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "29", n_cientifico: "Thamnodynastes gambotensis", n_comun: "Falsa patoco", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "30", n_cientifico: "Plecturocebus ornatus", n_comun: "Mono Zocay", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Region ornioquía"},
    {id: "31", n_cientifico: "Cebus versicolor", n_comun: "Capuchino de frente blanca", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "32", n_cientifico: "Saguinus leucopus", n_comun: "Tití Gris", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "33", n_cientifico: "Cebus malitiosus", n_comun: "Mono Cariblanco", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "34", n_cientifico: "Aotus jorgehernandezi", n_comun: "Mico nocturno de Hernández Camacho", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "35", n_cientifico: "Aotus brumbacki", n_comun: "Mico de noche llanero", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región ornioquía y amazonía"},
    {id: "36", n_cientifico: "Plecturocebus caquetensis", n_comun: "Tití del Caquetá", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Amazonía"},
    {id: "37", n_cientifico: "Cheracebus medemi ", n_comun: "Tití de Manos Negras", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Amazonía"},
    {id: "38", n_cientifico: "Amazilia castaneiventris", n_comun: "Quincha de Soatá", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "39", n_cientifico: "Amazilia cyanifrons", n_comun: "Diamante de frente azul", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "40", n_cientifico: "Anisognathus melanogenys", n_comun: "Tangara de Santa Marta", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "41", n_cientifico: "Anthocephala berlepschi", n_comun: "Colibrí cabecicastaño", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "42", n_cientifico: "Anthocephala floriceps", n_comun: "Colibrí florido", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "43", n_cientifico: "Arremon basilicus", n_comun: "Gorrión montés", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "44", n_cientifico: "Atlapetes blancae", n_comun: "Atlapetes antioqueño", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "45", n_cientifico: "Atlapetes flaviceps", n_comun: " Atlapetes cabecigualdo", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Andina y Pacífica"},
    {id: "46", n_cientifico: "Atlapetes fuscoolivaceus", n_comun: "Gorrión montés", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "47", n_cientifico: "Atlapetes melanocephalus", n_comun: "Saltón de Santa Marta", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "48", n_cientifico: "Bangsia melanochlamys", n_comun: "Tangara negrigualda", estado: "VU- Vulnerable", categoria: "", caracteristicas: "Región Andina"},
    {id: "49", n_cientifico: "Bolborhynchus ferrugineifrons", n_comun: "Lorito cadillero", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Andina y Pacífica"},
    {id: "50", n_cientifico: "Bucco noanamae", n_comun: "Buco de Noanamá", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Andina y Pacífica"},
    {id: "51", n_cientifico: "Campylopterus phainopeplus", n_comun: " Ala de sable de Santa Marta", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "52", n_cientifico: "Capito hypoleucus", n_comun: "Cabezón dorsiblanco", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Region Andina y Caribe"},
    {id: "53", n_cientifico: "Cercomacroides parkeri", n_comun: "Hormiguero de Parker", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina y Pacífica"},
    {id: "54", n_cientifico: "Chaetocercus astreans", n_comun: "Colibrí astral​", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "55", n_cientifico: "Chlorochrysa nitidissima", n_comun: "Tángara multicolor", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "56", n_cientifico: "Chlorostilbon olivaresi", n_comun: "Esmeralda del Chiribiquete", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina y Amazónica"},
    {id: "57", n_cientifico: "Cistosthorus apolinari", n_comun: "Cucarachero de pantano", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "58", n_cientifico: "Clibanornis rufipectus", n_comun: "Ticotico de Santa Marta", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "59", n_cientifico: "Coeligena orina", n_comun: "Colibrí del sol", estado: "EN- En peligro", categoria: "", caracteristicas: "Región Andina y Pacífica"},
    {id: "60", n_cientifico: "Coeligena phalerata", n_comun: "Inca coliblanco", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "61", n_cientifico: "Coeligena prunellei", n_comun: "Príncipe de Arcabuco", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "62", n_cientifico: "Crax alberti", n_comun: "Paujil colombiano", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "63", n_cientifico: "Dacnis hartlaubi", n_comun: "Dacnis turquesa", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "64", n_cientifico: "Diglossa gloriosissima", n_comun: "Pinchaflor ventrirrufo", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Andina y Pacífica"},
    {id: "65", n_cientifico: "Drymophila hellmayri", n_comun: "Tiluchí de Santa Marta​", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "66", n_cientifico: "Eriocnemis mirabilis", n_comun: "Esmeraldita patiblanca", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "67", n_cientifico: "Euphonia concinnna", n_comun: "Eufonia del Magdalena", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "68", n_cientifico: "Grallaria bangsi", n_comun: "Tororoí de Santa Marta", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "69", n_cientifico: "Grallaria kaestneri", n_comun: "Tororoi de Cundinamarca", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "70", n_cientifico: "Grallaria milleri", n_comun: "Tororoí bandeado", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "71", n_cientifico: "Grallaria urraoensis", n_comun: "Tororoí de Urrao", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "72", n_cientifico: "Habia cristata", n_comun: "Piranga hormiguera", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Pacífica"},
    {id: "73", n_cientifico: "Habia gutturalis", n_comun: "Piranga hormiguera", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina y Caribe"},
    {id: "74", n_cientifico: "Hapalopsittaca fuertesi", n_comun: "Loro coroniazul", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "75", n_cientifico: "Henicorhina anachoreta", n_comun: "Reyezuelo ermitaño", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "76", n_cientifico: "Henicorhina negreti", n_comun: "Cucharero de Munchique", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "77", n_cientifico: "Hypopyrrhus pyrohypogaster", n_comun: "Cacique candela", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Pacífica, Andina y Amazónica"},
    {id: "78", n_cientifico: "Lepidopyga lilliae", n_comun: "Colibrí cienagueo", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "79", n_cientifico: "Leptotila conoveri", n_comun: "Paloma montaraz ", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "80", n_cientifico: "Lipaugus weberi", n_comun: "Arrierito antioqueño", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "81", n_cientifico: "Macroagelaius subalaris", n_comun: "Cocha de Soatá", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "82", n_cientifico: "Megascops gilesi", n_comun: "Autillo de Santa Marta", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "83", n_cientifico: "Melanerpes pulcher", n_comun: "Pájaro carpintero", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "84", n_cientifico: "Myiarchus apicalis", n_comun: "Copetón apical", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "85", n_cientifico: "Myioborus flavivertex", n_comun: "Candelita coronigualda", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "86", n_cientifico: "Myiothlypis conspicillata", n_comun: "Arañero embridado", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "87", n_cientifico: "Ortalis columbiana", n_comun: "Chachalaca colombiana", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "88", n_cientifico: "Pristimantis palmeri", n_comun: "Rana ladrona de Palmer", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina y Pacífica"},
    {id: "89", n_cientifico: "Pristimantis tayrona", n_comun: "Rana ladrona", estado: "NT- Casi amenazado", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "90", n_cientifico: "Atelopus pictiventris", n_comun: "Sapo picudo punteado", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "91", n_cientifico: "Atelopus nahumae", n_comun: "Sapo picudo", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Caribe"},
    {id: "92", n_cientifico: "Atelopus chocoensis", n_comun: "Sapo picudo", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Pacífica"},
    {id: "93", n_cientifico: "Cryptotis colombiana", n_comun: "Musaraña Colombiana", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "94", n_cientifico: "Diplomys caniceps", n_comun: "Rata arboricola", estado: "DD – Datos insuficientes", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "95", n_cientifico: "Tityus columbianus", n_comun: "Alacran Sabanero", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "96", n_cientifico: "Phyllobates terribilis", n_comun: "Rana Dardo Dorada", estado: "EN- En peligro", categoria: "Endémica", caracteristicas: "Región Pacífica"},
    {id: "97", n_cientifico: "Marmosops handleyi", n_comun: "La zarigüeya delgada de Handley", estado: "CR – En Peligro Critico", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "98", n_cientifico: "Anolis agassizi", n_comun: "Lagarto de Malpelo", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región insular Pacífico (Malpelo)"},
    {id: "99", n_cientifico: "Oxypogon guerinii", n_comun: "Chivito de Páramo", estado: "Marmosops handleyi", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "100", n_cientifico: "Picumnus granadensis", n_comun: "Carpinterito Punteado", estado: "LC- Preocupación menor", categoria: "Endémica", caracteristicas: "Región Andina"},
    {id: "101", n_cientifico: "Capito hypoleucus", n_comun: "Torito Capiblanco", estado: "VU- Vulnerable", categoria: "Endémica", caracteristicas: "Región Andina"}
]


var especies = document.querySelectorAll(".group-esp"); 
var div = document.createElement("DIV")

function showInfo(data) {
    div.innerHTML = `
        <b> Nombre Científico: </b> <i> ${data.n_cientifico} </i> <br>
        <b> Nombre Común: </b> ${data.n_comun} <br>
        <b> Estado Global IUCN: </b> ${data.estado} <br>
        <b> Categoría: </b> Especie ${data.categoria} para la ${data.caracteristicas}
    `
}

especies.forEach(el => {
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
            <div class="tooltip" role="tooltip" style="width: 25%">
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