document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    try {
        const user = await signUp(username, email, password);
        console.log('Registro exitoso', user);
        alert('Registro exitoso. Por favor, verifica tu correo electrónico para confirmar tu cuenta.');
        // Redirigir al usuario a la página de inicio de sesión
    } catch (error) {
        console.error('Error al registrarse', error);
        alert('Error al registrarse. Por favor, inténtalo de nuevo.');
    }
});