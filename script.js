      function mostrarSeccion(id) { // Cambia la sección activa
        document.querySelectorAll('section').forEach(seccion => // Elimina la clase activa de todas las secciones
        {
          seccion.classList.remove('activa');
        });
        document.getElementById(id).classList.add('activa'); // Agrega la clase activa a la sección seleccionada
      }
      function enviarFormulario(event) // Envía el formulario aunque en realidad no se envía porque no tiene a donde jajajaja
      {
        event.preventDefault();
        //event.target.submit() es para enviar el formulario a un servidor, pero no lo tenemos como ya dije jajajaja
        const nombre = document.getElementById('nombre').value;
        const mensajeEnviado = document.getElementById('mensaje-enviado');
      
        mensajeEnviado.textContent = `Gracias ${nombre}, tu mensaje ha sido enviado.`;
        mensajeEnviado.style.display = 'block';
        
        event.target.reset();
        
        setTimeout(() => {
          mensajeEnviado.style.display = 'none';
        }, 5000);
      }
      window.onload = function() {
        mostrarSeccion('inicio');
      }; //esto último es para que al cargar la página se muestre la sección de inicio por defecto