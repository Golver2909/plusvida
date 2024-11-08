// Clases necesarias para el sistema
class Usuario {
    constructor(nombreUsuario, contraseña, persona) {
        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;
        this.persona = persona;
        this.cuentas = [];
    }

    get nombreCompleto() {
        return this.nombreUsuario;
    }
}

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

// Variables globales para almacenar datos
let usuarios = {};
let usuarioActual = null;

// Función de registro
function registrarUsuario() {
    const nombreUsuario = document.getElementById('gmail').value;
    const contraseña = document.getElementById('contraseña').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;

    if (!nombreUsuario || !contraseña || !nombre || !apellido) {
        alert("Por favor complete todos los campos.");
        return;
    }

    if (usuarios[nombreUsuario]) {
        alert("Este usuario ya existe.");
        return;
    }

    const persona = new Persona(nombre, apellido);
    const usuario = new Usuario(nombreUsuario, contraseña, persona);
    
    usuarios[nombreUsuario] = usuario;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert("Usuario registrado con éxito.");
}

// Función de inicio de sesión
function iniciarSesion() {
    const nombreUsuario = document.getElementById('nombre').value;
    const contraseña = document.getElementById('contraseña').value;

    if (!nombreUsuario || !contraseña) {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Recuperar usuarios del localStorage
    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
        usuarios = JSON.parse(usuariosGuardados);
    }

    const usuario = usuarios[nombreUsuario];
    if (!usuario || usuario.contraseña !== contraseña) {
        alert("Usuario y/o contraseña incorrectos.");
        return;
    }

    localStorage.setItem('usuarioLogueado', nombreUsuario);
    alert("Felicidades usuario logeado: " + nombreUsuario);
    location.href = "index.html";
}

// Función para mostrar el usuario logueado
function mostrarUsuarioLogueado() {
    const nombreUsuarioLogueado = localStorage.getItem('usuarioLogueado');
    const elementoNombre = document.getElementById('nombre1');
    
    if (nombreUsuarioLogueado && elementoNombre) {
        elementoNombre.textContent = `Usuario: ${nombreUsuarioLogueado}`;
    } else {
        if (elementoNombre) {
            elementoNombre.textContent = "Aún no se loguea";
        }
    }
}

// Función para cargar datos
function cargarDatos() {
    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
        usuarios = JSON.parse(usuariosGuardados);
    }
    mostrarUsuarioLogueado();
}

// Inicializar datos al cargar la página
window.onload = function() {
    cargarDatos();
}