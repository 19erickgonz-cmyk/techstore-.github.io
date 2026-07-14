// Funcionalidad de zoom al pasar el cursor (hover effect)

document.addEventListener('DOMContentLoaded', () => {
  const productImages = document.querySelectorAll('.product-img');
  
  productImages.forEach(imgContainer => {
    const img = imgContainer.querySelector('img');
    
    if (!img) return;
    
    // Evento al pasar el cursor
    imgContainer.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.2)';
    });
    
    // Evento al salir el cursor
    imgContainer.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
});
