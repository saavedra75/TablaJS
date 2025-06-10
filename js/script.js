window.onload = setUpPage;


function setUpPage(event) {

    
    let cuerpo = document.querySelector("body");
    /*1
    let figura = createFigure("img/tun.jpeg", "Niente e vero, tutto é permesso");
    cuerpo.appendChild(figura);*/

    let tabla = crearTabla(7, 3);
    cuerpo.appendChild(tabla);

    let thead = document.getElementsByTagName("thead")[0];
    thead.style.textAlign="center";
    thead.rows[0].cells[0].textContent = "";
    thead.rows[0].cells[1].textContent = "Calificación";
    thead.rows[0].cells[2].textContent = "Motivo";


    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.style.textAlign="center";
    tbody.rows[0].cells[0].textContent = "Elías";
    tbody.rows[0].cells[1].textContent = "10";
    tbody.rows[0].cells[2].textContent = "Muy buen alumno";

    tbody.rows[1].cells[0].textContent = "Abel";
    tbody.rows[1].cells[1].textContent = "10";
    tbody.rows[1].cells[2].textContent = "Por pena";

    tbody.rows[2].cells[0].textContent = "Jose Manuel";
    tbody.rows[2].cells[1].textContent = "10";
    tbody.rows[2].cells[2].textContent = "Por pena";
    
    tbody.rows[3].cells[0].textContent = "Ivan Bisan";
    tbody.rows[3].cells[1].textContent = "10";
    tbody.rows[3].cells[2].textContent = "Ahí está el tío";

    tbody.rows[4].cells[0].textContent = "Carlos";
    tbody.rows[4].cells[1].textContent = "10";
    tbody.rows[4].cells[2].textContent = "8.537981, -80.782127";


    tbody.rows[5].cells[0].textContent = "Ismael";
    tbody.rows[5].cells[1].textContent = "10";
    tbody.rows[5].cells[2].textContent = "Por pena";

    botonEnviar = document.getElementById("botonEnviar");
    botonEnviar.addEventListener("click", addRegistro);
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

const crearBotonEliminar = function(){
    let botonEliminar = document.createElement("button");
    botonEliminar.className = "botonEliminar";
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function(){
        eliminarElemento(this);
    });
    return botonEliminar;
}

const crearBotonEditar = function(){
    let botonEditar = document.createElement("button");
    botonEditar.id = "botonEditar";
    botonEditar.textContent = "Editar";
    botonEditar.addEventListener("click", function(){
        editarRegistro(this);
    });    
    return botonEditar;
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
    let tbody = document.createElement("tbody");
    tbody.id = "cuerpoTabla";
    return tbody;
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

    

for (let i = 0; i < altura - 1; i++) {
    let TRParaBody = createTR();
    for (let j = 0; j < anchura; j++) {
        TRParaBody.appendChild(createTD("hola"));
    }
    TRParaBody.appendChild(createTD().appendChild(crearBotonEditar()));
    TRParaBody.appendChild(createTD().appendChild(crearBotonEliminar()));
    tbody.appendChild(TRParaBody);
}



    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    tabla.appendChild(tfooter);
    return tabla;
}


const eliminarElemento = function(boton){
    let fila = boton.closest("tr");
    if (fila) {
        fila.remove();
    }}

const addRegistro = function(event){

    event.preventDefault();
    //crea un td para cada campo y le añade el valor del input.
    const nombre = document.createElement("td");
    nombre.style.border = "1px solid black";
    nombre.textContent = document.getElementById("nombre").value;

    const nota = document.createElement("td");
    nota.style.border = "1px solid black";
    nota.textContent = document.getElementById("nota").value;

    const motivo = document.createElement("td");
    motivo.style.border = "1px solid black";
    motivo.textContent = document.getElementById("motivo").value;
    
    //creo un tr con los botones
    const botonEditar = document.createElement("td").appendChild(crearBotonEditar());
    const botonEliminar = document.createElement("td").appendChild(crearBotonEliminar());


    const tbody = document.getElementById("cuerpoTabla");


    let TR = document.createElement("tr");
    TR.appendChild(nombre);
    TR.appendChild(nota);
    TR.appendChild(motivo);
    TR.appendChild(botonEditar);
    TR.appendChild(botonEliminar);


    tbody.appendChild(TR);
}

const editarRegistro = function(boton){
    let fila = boton.closest("tr");
    const campos = fila.getElementsByTagName("td");

    campos[0].textContent = document.getElementById("nombre").value;

    campos[1].textContent = document.getElementById("nota").value;

    campos[2].textContent = document.getElementById("motivo").value;
}