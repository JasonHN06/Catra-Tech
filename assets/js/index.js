/*Cambiar el tema*/
const cambio = document.getElementById("cambio-dark");
cambio.addEventListener("click", cambiarTema);
function cambiarTema() {
  const body = document.body;
  // Alterna la clase 'dark' en el body
  body.classList.toggle("dark");
  // Si quieres guardar la preferencia en localStorage:
  if (body.classList.contains("dark")) {
    localStorage.setItem("modo", "oscuro");
  } else {
    localStorage.setItem("modo", "claro");
  }
}

// Activar el modo guardado al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    document.body.classList.add("dark");
  }
});

/* giro al icono del menu en vista movil */
const toggler = document.querySelector('.navbar-toggler');
toggler.addEventListener('click', () => {
  toggler.classList.toggle('rotate');
});

/*Modal ver detalles*/
function verDetalles(nombre, img, descripcion, precio, caracteristicas) {
  document.getElementById('detalle-img').src = img;
  document.getElementById('detalle-img').alt = nombre;
  document.getElementById('detalle-titulo').textContent = nombre;
  document.getElementById('detalle-descrip').textContent = descripcion;
  document.getElementById('detalle-precio').textContent = `Precio: ${precio}`;
  
  const lista = document.getElementById('detalle-lista');
  lista.innerHTML = '';
  caracteristicas.forEach(item => {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    lista.appendChild(li);
  });
}

/*Animacion anuncio*/
const anuncio = document.querySelector('.animacion-anuncio')
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anuncio.classList.add('visible');
      }
    });
}, {
  threshold: 0.3
})
observer.observe(anuncio);

