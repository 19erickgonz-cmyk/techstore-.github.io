// Funcionalidad de zoom para imágenes de productos

// Crear el modal de zoom
function crearModalZoom() {
  const modal = document.createElement('div');
  modal.className = 'image-zoom-modal';
  modal.id = 'zoom-modal';
  modal.innerHTML = `
    <div class="zoom-content">
      <button class="zoom-close" onclick="cerrarZoom()">&times;</button>
      <img id="zoom-image" src="" alt="Zoom">
    </div>
  `;
  document.body.appendChild(modal);
}

// Abrir zoom
function abrirZoom(imageSrc) {
  const modal = document.getElementById('zoom-modal');
  const zoomImage = document.getElementById('zoom-image');
  
  if (!modal) return;
  
  zoomImage.src = imageSrc;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Cerrar zoom
function cerrarZoom() {
  const modal = document.getElementById('zoom-modal');
  if (!modal) return;
  
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Inicializar zoom en las imágenes de productos
function inicializarZoom() {
  // Crear el modal si no existe
  if (!document.getElementById('zoom-modal')) {
    crearModalZoom();
  }
  
  // Agregar evento click a todas las imágenes de productos
  const productImages = document.querySelectorAll('.product-img img');
  productImages.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      abrirZoom(img.src);
    });
  });
  
  // Cerrar modal al hacer click fuera de la imagen
  const modal = document.getElementById('zoom-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        cerrarZoom();
      }
    });
  }
  
  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cerrarZoom();
    }
  });
}

// Reinicializar zoom cuando se actualiza el catálogo
function reinicializarZoom() {
  inicializarZoom();
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarZoom);
