function uploadImage() {
    const fileInput = document.getElementById('imageInput');
    const formData = new FormData();
    formData.append('image', fileInput.files[0]);
  
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('response').innerText = `Ecuación detectada: ${data.result}`;
      solveEquationFromImage(data.result);
    })
    .catch(error => {
      document.getElementById('response').innerText = 'Error al procesar la imagen';
    });
  }
  
  function solveEquation() {
    const equation = document.getElementById('equationInput').value;
  
    fetch('/solve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ equation }),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('solution').innerText = `Solución: ${data.result}`;
    })
    .catch(error => {
      document.getElementById('solution').innerText = 'Error al resolver la ecuación';
    });
  }
  
  function solveEquationFromImage(equation) {
    fetch('/solve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ equation }),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('solution').innerText = `Solución: ${data.result}`;
    })
    .catch(error => {
      document.getElementById('solution').innerText = 'Error al resolver la ecuación';
    });
  }
  