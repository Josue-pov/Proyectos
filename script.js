      function mostrarSeccion(id) { // Cambia la sección activa
        document.querySelectorAll('section').forEach(seccion => // Elimina la clase activa de todas las secciones
        {
          seccion.classList.remove('activa');
        });
        document.getElementById(id).classList.add('activa'); // Agrega la clase activa a la sección seleccionada
      }
document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const nombre = formData.get('nombre');
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      const mensajeEnviado = document.getElementById('mensaje-enviado');
      mensajeEnviado.textContent = `Gracias ${nombre}, tu mensaje ha sido enviado.`;
      mensajeEnviado.style.display = 'block';
      form.reset();
      
      setTimeout(() => {
        mensajeEnviado.style.display = 'none';
      }, 5000);
    } else {
      throw new Error('Error en el envío');
    }
  } catch (error) {
    alert('Hubo un error al enviar el mensaje. Por favor inténtalo de nuevo.');
  }
});
      window.onload = function() {
        mostrarSeccion('inicio');
      }; //esto último es para que al cargar la página se muestre la sección de inicio por defecto