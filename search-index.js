// Función de búsqueda y filtrado en la página principal
function filtrarProductosIndex() {
  const searchInput = document.getElementById('search-input-index');
  const categoryFilter = document.getElementById('category-filter-index');
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  
  // Si no hay búsqueda, redirigir a catálogo
  if (searchTerm.length === 0 && !selectedCategory) {
    window.location.href = 'todoslosproductos/catalogo.html';
    return;
  }
  
  // Redirigir a catálogo con búsqueda
  let url = 'todoslosproductos/catalogo.html';
  if (searchTerm) {
    url += '?search=' + encodeURIComponent(searchTerm);
  }
  if (selectedCategory) {
    url += (searchTerm ? '&' : '?') + 'category=' + encodeURIComponent(selectedCategory);
  }
  window.location.href = url;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input-index');
  const categoryFilter = document.getElementById('category-filter-index');
  
  // Búsqueda al presionar Enter
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        filtrarProductosIndex();
      }
    });
  }
  
  // Ir a catálogo con filtro cuando se selecciona categoría
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filtrarProductosIndex);
  }
});
