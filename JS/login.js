document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const result = await signIn(username, password);
        console.log('Inicio de sesión exitoso', result);
        // Redirigir al usuario a la página principal o dashboard
        window.location.href = '../home.html';
    } catch (error) {
        console.error('Error al iniciar sesión', error);
        alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    }
});