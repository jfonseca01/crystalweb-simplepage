// Validación básica del formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");
  if (form) {
    form.addEventListener("submit", (e) => {
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !email || !mensaje) {
        alert("Por favor, complete todos los campos.");
        e.preventDefault();
      } else {
        alert("¡Mensaje enviado con éxito!");
      }
    });
  }
});
