// FUNCI[ON PARA CONSULTAR SALDO
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

// FUNCION PARA CREAR USUARIO
function crearUsuario() {
    const usuario = document.getElementById('usuario').value;
    if (!usuario) {
        alert('Por favor, ingrese un nombre de usuario.');
        return;
    }

    fetch('https://5zwtbhmnqh.execute-api.us-west-2.amazonaws.com/Dev/CreateUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Usuario: usuario })
    })
    .then(response => response.json())
    .then(data => {
        const resultado = JSON.parse(data.body);
        document.getElementById('resultado').innerHTML = resultado.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').innerHTML = 'Error al crear el usuario. Por favor, intente de nuevo.';
    });
}

// FUNCION PARA INGRESAR SALDO
function mostrarIngresarSaldo() {
    document.getElementById('IngresarSaldo').style.display = 'block';
    document.getElementById('RetirarSaldo').style.display = 'none';
    document.getElementById('IngresarSaldo').querySelector('button').textContent = 'Ingresar';
}

function IngresarSaldo() {
    const usuario = document.getElementById('usuario').value;
    const monto = document.getElementById('montoI').value;
    if (!usuario || !monto) {
        alert('Por favor, ingrese un nombre de usuario y un monto.');
        return;
    }

    fetch('https://5zwtbhmnqh.execute-api.us-west-2.amazonaws.com/Dev/Ingresar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Usuario: usuario,
            Monto: monto,
            Proceso: "Ingresar Saldo"
        })
    })
    .then(response => response.json())
    .then(data => {
        const resultado = JSON.parse(data.body);
        document.getElementById('resultado').innerHTML = `${resultado.message} Nuevo saldo: $${resultado.nuevo_saldo}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').innerHTML = 'Error al ingresar saldo. Por favor, intente de nuevo.';
    });
    document.getElementById('IngresarSaldo').style.display = 'none';
}
// FUNCION PARA RETIRAR SALDO
function mostrarRetirarSaldo() {
    document.getElementById('IngresarSaldo').style.display = 'none';
    document.getElementById('RetirarSaldo').style.display = 'block';
    document.getElementById('RetirarSaldo').querySelector('button').textContent = 'Retirar';
}

function RetirarSaldo() {
    const usuario = document.getElementById('usuario').value;
    const monto = document.getElementById('montoR').value;
    if (!usuario || !monto) {
        alert('Por favor, ingrese un nombre de usuario y un monto.');
        return;
    }

    fetch('https://5zwtbhmnqh.execute-api.us-west-2.amazonaws.com/Dev/Retirar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Usuario: usuario,
            Monto: monto,
            Proceso: "Retirar Saldo"
        })
    })
    .then(response => response.json())
    .then(data => {
        const resultado = JSON.parse(data.body);
        document.getElementById('resultado').innerHTML = `${resultado.message} Nuevo saldo: $${resultado.nuevo_saldo}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').innerHTML = 'Error al retirar saldo. Por favor, intente de nuevo.';
    });
    document.getElementById('RetirarSaldo').style.display = 'none';
}