let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Escribir de forma dinamica
const textos = ["Estudiante Ingeniería en Sistemas", "Desarrollador Backend"];
let indice = 0;
let textoActual = "";
let letraIndex = 0;
let borrando = false;

function escribirTexto() {
    const elemento = document.getElementById("text-dinamico");

    if (!borrando) {
        textoActual = textos[indice].substring(0, letraIndex + 1);
        letraIndex++;
    } else {
        textoActual = textos[indice].substring(0, letraIndex - 1);
        letraIndex--;
    }

    elemento.textContent = textoActual;

    if (!borrando && letraIndex === textos[indice].length) {
        setTimeout(() => (borrando = true), 2000); // Mantiene el texto 2s antes de borrar
    } else if (borrando && letraIndex === 0) {
        borrando = false;
        indice = (indice + 1) % textos.length; // Cambia de texto
    }

    setTimeout(escribirTexto, borrando ? 50 : 100); // Velocidad de escritura y borrado
}

document.addEventListener("DOMContentLoaded", escribirTexto);

// Animacion de la descripcion desplegable
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const descripcion = btn.nextElementSibling;
        descripcion.classList.toggle('activo');
        btn.textContent = descripcion.classList.contains('activo') ? '▲' : '▼';
    });
});

function toggleDescripcion(elemento) {
    let descripcion = elemento.nextElementSibling;
    
    if (descripcion.style.display === "none") {
        descripcion.style.display = "block";
        elemento.classList.add("fa-rotate-180"); // Rota la flecha hacia arriba
    } else {
        descripcion.style.display = "none";
        elemento.classList.remove("fa-rotate-180"); // Rota la flecha hacia abajo
    }
}

// Función para copiar número o correo
function copiarTexto(id) {
    let texto = document.getElementById(id).innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Copiado: " + texto);
    });
}

// Función para enviar mensaje
function enviarMensaje() {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let tema = document.getElementById("tema").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre && correo && mensaje) {
        let mailtoLink = `mailto:baltolarry.23@gmail.com?subject=${encodeURIComponent(tema)}&body=${encodeURIComponent(
            `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`
        )}`;
        window.location.href = mailtoLink;
    } else {
        alert("Por favor, completa los campos requeridos.");
    }
}