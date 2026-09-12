// app.js — Lógica de selección de productos en la escena VR
// Escucha clics del cursor A-Frame en elementos con clase "producto"
// y actualiza el contador en el panel.

let seleccionados = 0;

document.addEventListener("DOMContentLoaded", () => {
    const contador = document.getElementById("contador");
    if (!contador) return;

    document.querySelectorAll(".producto").forEach(producto => {
        producto.addEventListener("click", () => {
            seleccionados++;
            contador.textContent = seleccionados;

            // Feedback visual: cambiar color brevemente
            const colorOriginal = producto.getAttribute("color");
            producto.setAttribute("color", "#FFD700");
            setTimeout(() => {
                producto.setAttribute("color", colorOriginal || "#CCCCCC");
            }, 400);
        });
    });
});
