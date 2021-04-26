function enviarComentario() {
  var autor = document.getElementById("autor").value;
  var comentario = document.getElementById("comentario").value;

  const alength = autor.length;
  const clength = comentario.length;

  if (alength > 3 && clength < 200 && clength > 1) {
    var fecha = calcularFecha();
    crearComentarios(autor, comentario, fecha);
  } else {
    alert("Error");
  }
}

const comentarios = document.querySelector(".comentarios");

function crearComentarios(nombre, mensaje, fecha) {
  const comentarioNombre = document.createElement("label");
  const comentarioMensaje = document.createElement("P");
  const comentarioFecha = document.createElement("label");

  comentarioFecha.textContent = "Fecha: " + fecha;
  comentarioNombre.textContent = nombre;
  comentarioMensaje.textContent = mensaje;

  const autor = document.createElement("DIV");

  autor.classList.add("autor");
  autor.appendChild(comentarioNombre);
  autor.appendChild(comentarioFecha);

  const campoComentario = document.createElement("LI");
  campoComentario.classList.add("campoComent");

  var x = document.querySelector(".comentarios").childElementCount;

  if (x <= 3) {
    campoComentario.appendChild(autor);
    campoComentario.appendChild(comentarioMensaje);
    comentarios.prepend(campoComentario);
    return;
  } else {
    var x = document.querySelector(".comentarios");
    x.removeChild(x.childNodes[3]);
    campoComentario.appendChild(autor);
    campoComentario.appendChild(comentarioMensaje);
    comentarios.prepend(campoComentario);
  }
}

function calcularFecha() {
  let date = new Date();
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  var fecha = date.toLocaleDateString("es-ES", options);
  return fecha;
}