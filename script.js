// Script para manejar el envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validación básica
    if (name && email && message) {
        alert("Gracias por contactarme, " + name + ". ¡Te responderé pronto!");
        document.getElementById("contact-form").reset(); // Limpiar el formulario
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
