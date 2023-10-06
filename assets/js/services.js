// Objeto que mapea cada servicio con su elemento contenedor
const serviceElements = {
  storage: document.getElementById('storage'),
  logistics: document.getElementById('logistics'),
  cargo: document.getElementById('cargo'),
  trucking: document.getElementById('trucking'),
  packaging: document.getElementById('packaging'),
  warehousing: document.getElementById('warehousing')
};

// Función para cargar el contenido del servicio seleccionado
function loadServiceContent(service) {
  // Oculta todos los elementos de contenido del servicio
  Object.values(serviceElements).forEach(function(element) {
    element.style.display = 'none';
  });

  // Muestra el elemento de contenido correspondiente al servicio seleccionado
  const selectedElement = serviceElements[service];
  if (selectedElement) {
    selectedElement.style.display = 'block';
  }
}

// Obtén todas las etiquetas <a> dentro de la clase "services-list"
const serviceLinks = document.querySelectorAll('.services-list a');

// Itera sobre cada enlace y agrega un evento de clic
serviceLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que se recargue la página al hacer clic en el enlace

    // Elimina la clase "active" de todos los enlaces
    serviceLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    // Agrega la clase "active" al enlace seleccionado
    link.classList.add('active');

    // Obtén el servicio asociado al enlace seleccionado
    const service = link.dataset.service;

    // Carga el contenido del servicio seleccionado
    loadServiceContent(service);
  });
});
