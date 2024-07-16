// Función para consultar saldo
function consultarSaldo() {
    const usuario = document.getElementById('usuario').value;
    if (!usuario) {
        alert('Por favor, ingrese un nombre de usuario.');
        return;
    }

    fetch('https://5zwtbhmnqh.execute-api.us-west-2.amazonaws.com/Dev/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Usuario: usuario })
    })
    .then(response => response.json())
    .then(data => {
        if (data.statusCode === 200) {
            const resultado = JSON.parse(data.body);
            document.getElementById('resultado').innerHTML = `Saldo de ${usuario}: $${resultado.Saldo}`;
        } else if (data.statusCode === 404) {
            document.getElementById('resultado').innerHTML = 'Usuario no encontrado.';
        } else {
            document.getElementById('resultado').innerHTML = `Error: ${JSON.parse(data.body).message}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').innerHTML = 'Error al consultar el saldo. Por favor, intente de nuevo.';
    });
}


function crearUsuario() {
    const usuario = document.getElementById('usuario').value;
    // Aquí irá la llamada a la API Gateway para crear un usuario
    document.getElementById('resultado').innerHTML = `Creando usuario ${usuario}...`;
}

function mostrarIngresarSaldo() {
    document.getElementById('IngresarSaldo').style.display = 'block';
    document.getElementById('IngresarSaldo').querySelector('button').textContent = 'Ingresar';
}

function mostrarRetirarSaldo() {
    document.getElementById('RetirarSaldo').style.display = 'block';
    document.getElementById('RetirarSaldo').querySelector('button').textContent = 'Retirar';
}

function IngresarSaldo(operacion) {
    const usuario = document.getElementById('usuario').value;
    const monto = document.getElementById('montoI').value;
    // Aquí irá la llamada a la API Gateway para ingresar o retirar saldo
    document.getElementById('resultado').innerHTML = `${operacion} ${monto} para ${usuario}...`;
    document.getElementById('saldoOperacion').style.display = 'none';
}

function RetirarSaldo(operacion) {
    const usuario = document.getElementById('usuario').value;
    const monto = document.getElementById('montoR').value;
    // Aquí irá la llamada a la API Gateway para ingresar o retirar saldo
    document.getElementById('resultado').innerHTML = `${operacion} ${monto} para ${usuario}...`;
    document.getElementById('saldoOperacion').style.display = 'none';
}