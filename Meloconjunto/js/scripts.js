function showContent(id) {
  // Oculta todos los cuadros
  const boxes = document.querySelectorAll('.content-box');
  boxes.forEach(box => {
    box.style.display = 'none';
  });

  // Si se selecciona "Mostrar Todo", muestra todos los cuadros
  if (id === 'todos') {
    boxes.forEach(box => {
      box.style.display = 'block';
    });
  } else {
    // Muestra solo el cuadro correspondiente
    const selectedBox = document.getElementById(id);
    if (selectedBox) {
      selectedBox.style.display = 'block';
    }
  }
}