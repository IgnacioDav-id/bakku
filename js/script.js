/*
  CONFIGURACIÓN IMPORTANTE:
  Cambia el número de ejemplo por tu número de WhatsApp.
  Ecuador: escribe 593 seguido de tu número, sin +, espacios ni guiones.
  Ejemplo ficticio: 593991234567
*/
const NUMERO_WHATSAPP = "593988744072";

// Abre WhatsApp con un mensaje preparado.
function abrirWhatsApp(mensaje) {
  if (NUMERO_WHATSAPP.includes("X") || NUMERO_WHATSAPP.length < 10) {
    alert("Antes de recibir pedidos, abre js/script.js y coloca tu número real de WhatsApp en NUMERO_WHATSAPP.");
    return;
  }

  const enlace = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensaje);
  window.open(enlace, "_blank", "noopener,noreferrer");
}

// Botones de los productos: el nombre se lee desde data-producto en el HTML.
document.querySelectorAll(".pedir-producto").forEach(function(boton) {
  boton.addEventListener("click", function() {
    const producto = boton.dataset.producto;
    abrirWhatsApp("¡Hola, BAKKU! Me interesa este producto: " + producto + ". ¿Me pueden informar el precio, las opciones disponibles y cómo hacer el pedido?");
  });
});

// Botón de contacto general.
document.querySelector("#contacto-whatsapp").addEventListener("click", function() {
  abrirWhatsApp("¡Hola, BAKKU! Quiero información sobre sus productos y cómo hacer un pedido.");
});

// Menú desplegable para celulares.
const botonMenu = document.querySelector("#menu-toggle");
const navegacion = document.querySelector("#navegacion");

botonMenu.addEventListener("click", function() {
  const estaAbierto = navegacion.classList.toggle("abierto");
  botonMenu.setAttribute("aria-expanded", estaAbierto);
  botonMenu.setAttribute("aria-label", estaAbierto ? "Cerrar menú" : "Abrir menú");
  botonMenu.textContent = estaAbierto ? "×" : "☰";
});

// Cierra el menú del celular al tocar un enlace.
navegacion.querySelectorAll("a").forEach(function(enlace) {
  enlace.addEventListener("click", function() {
    navegacion.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.textContent = "☰";
  });
});

// Actualiza automáticamente el año del pie de página.
document.querySelector("#anio").textContent = new Date().getFullYear();
