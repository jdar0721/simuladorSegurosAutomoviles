function actualizarModelos(marcaSeleccionada) {
    const selectModelo = document.getElementById('modelo');
    selectModelo.innerHTML = ''; 
  
    const modelos = {
      'renault': ['Duster', 'Logan', 'Kwid'],
      'chevrolet': ['Cruze', 'Onix', 'Tracker'],
      'nissan': ['Sentra', 'Versa', 'Altima']
    };
  
    const modelosDisponibles = modelos[marcaSeleccionada] || [];
  
    modelosDisponibles.forEach(modelo => {
      const option = document.createElement('option');
      option.value = modelo;
      option.text = modelo;
      selectModelo.appendChild(option);
    });
  }
  
  const selectMarca = document.getElementById('marca'); 
  selectMarca.addEventListener('change', () => {
    const marcaSeleccionada = selectMarca.value;
    actualizarModelos(marcaSeleccionada);
  });

 