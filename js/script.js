window.onload = setUpPage;


function setUpPage(event) {
    let cuerpo = document.querySelector("body");

    let figura = createFigure("img/tun.jpeg", "Niente e vero, tutto é permesso");
    cuerpo.appendChild(figura);

    let tabla = crearTabla(3, 7);
    cuerpo.appendChild(tabla);

    let thead = document.getElementsByTagName("thead")[0];
    thead.style.textAlign="center";
    thead.rows[0].cells[0].textContent = "";
    thead.rows[0].cells[1].textContent = "Elías";
    thead.rows[0].cells[2].textContent = "David";
    thead.rows[0].cells[3].textContent = "Iván";
    thead.rows[0].cells[4].textContent = "Carlos";
    thead.rows[0].cells[5].textContent = "Ismael";
    thead.rows[0].cells[6].textContent = "José Manuel";


    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.style.textAlign="center";
    tbody.rows[0].cells[0].textContent = "Calificación";
    tbody.rows[0].cells[1].textContent = "10";
    tbody.rows[0].cells[2].textContent = "10";
    tbody.rows[0].cells[3].textContent = "10";
    tbody.rows[0].cells[4].textContent = "10";
    tbody.rows[0].cells[5].textContent = "10";
    tbody.rows[0].cells[6].textContent = "10";

    tbody.rows[1].cells[0].textContent = "Motivo";
    tbody.rows[1].cells[1].textContent = "Es un genio";
    tbody.rows[1].cells[2].textContent = "De lo más currante";
    tbody.rows[1].cells[3].textContent = "No lo sé en verdad";
    tbody.rows[1].cells[4].textContent = "Me cae bien";
    tbody.rows[1].cells[5].textContent = "Le gusta JavaScript";
    tbody.rows[1].cells[6].textContent = "Porfa¿?";
    
}

const createImagen = function(src){
    let imagen = document.createElement("img");
    imagen.src = src;
    imagen.alt = "nueva imagen";
    imagen.style.width = "300px";
    imagen.style.height = "300px";
    return imagen;
}

const createFigCaption = function(parrafo){
    let nuevoParrafo = document.createElement("figcaption");
    nuevoParrafo.textContent = parrafo;
    nuevoParrafo.style.color = "green";
    return nuevoParrafo;
}



const createFigure = function(src, pie){
    let figura = document.createElement("figure");
    let imagenAnniadir = createImagen(src);
    let figCaption = createFigCaption(pie);

    figura.appendChild(imagenAnniadir);
    figura.appendChild(figCaption);

    return figura;

}


const createTD = function(contenido){
    let TD = document.createElement("td");
    TD.textContent = contenido;
    TD.style.border = "1px solid black";
    return TD;
}

const createTH = function(contenido){
    let TH = document.createElement("th");
    TH.style.border = "1px solid black";
    TH.textContent = contenido;
    return TH;
}


const createTR = function(){

    let TR= document.createElement("tr");
    return TR;
}

const createTHeader = function(){
    return document.createElement("thead");
}


const createTBody = function(){
    return document.createElement("tbody");
}

const createTFooter = function(){
    return document.createElement("tfoot");
}

const createCaption = function(texto){
    let caption = document.createElement("caption");
    caption.textContent = texto;
    return caption;
}


const crearTabla = function(altura, anchura){
    let tabla = document.createElement("table");
    tabla.style.border = "1px solid black";

    let thead = createTHeader();
    let tbody = createTBody();
    let tfooter = createTFooter();
    
    //le doy un caption a la tabla
    tabla.appendChild(createCaption("Notas"));
    
    //añado un tr y los pertinentes th
    let trParaThead = createTR();
    
    for(let i = 0; i < anchura; i++) {
        trParaThead.appendChild(createTH("hola"));
    }

    thead.appendChild(trParaThead);


    let TRParaBody = createTR();

    

for (let i = 0; i < altura - 1; i++) {
    let fila = createTR();
    for (let j = 0; j < anchura; j++) {
        fila.appendChild(createTD("hola"));
    }
    tbody.appendChild(fila);
}



    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    tabla.appendChild(tfooter);
    return tabla;
}