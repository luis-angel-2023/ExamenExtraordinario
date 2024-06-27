document.getElementById('promedioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    const calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    const promedio = (calificacion1 + calificacion2) / 2;
    document.getElementById('resultado').innerText = 'El promedio es: ' + promedio;
});