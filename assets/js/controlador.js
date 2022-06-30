var usuarioSeleccionado = null;
var perfilActual = 0;

const OPCION_USUARIOS = 1;
const OPCION_PERFILES = 2;
const OPCION_MATCHES = 3;

const seleccionarOpcion = (opcion) => {
    switch (opcion) {
        case OPCION_USUARIOS:
          console.log('Visualizar usuarios');
          document.getElementById('opcion-usuario').classList.add('active');
          document.getElementById('opcion-perfiles').classList.remove('flama-activa');
          document.getElementById('opcion-matches').classList.remove('estrella-activa');
          document.getElementById('contenido-1').style.display = "block";
          document.getElementById('contenido-2').style.display = "none";
          document.getElementById('contenido-3').style.display = "none";
          break;
        case OPCION_PERFILES:
          console.log('Visualizar perfiles');
          document.getElementById('opcion-usuario').classList.remove('active');
          document.getElementById('opcion-perfiles').classList.add('flama-activa');
          document.getElementById('opcion-matches').classList.remove('estrella-activa');
          document.getElementById('opcion-activa').style.transform = 'translateX(0)';
          document.getElementById('contenido-1').style.display = "none";
          document.getElementById('contenido-2').style.display = "block";
          document.getElementById('contenido-3').style.display = "none";
          const usuarioAutenticado = usuarios.filter(u => u.id === usuarioSeleccionado)[0];
          perfilActual = 0;
          if (usuarioAutenticado.generoInteres.includes(usuarios[perfilActual].genero)) {
            renderizarPerfil(usuarios[perfilActual]);
          } else {
            perfilSiguiente();
          }
          // transform: translateX(0%);
          break;
        case OPCION_MATCHES:
          console.log('Visualizar matches');
          document.getElementById('opcion-usuario').classList.remove('active');
          document.getElementById('opcion-perfiles').classList.remove('flama-activa');
          document.getElementById('opcion-matches').classList.add('estrella-activa');
          document.getElementById('opcion-activa').style.transform = 'translateX(107%)';
          document.getElementById('contenido-1').style.display = "none";
          document.getElementById('contenido-2').style.display = "none";
          document.getElementById('contenido-3').style.display = "block";
          break;
        default:
          break;
    }
}


console.log('Usuarios', usuariosDataInicial);

const guardarUsuarios = () => {
  if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify(usuariosDataInicial));
  }
}

guardarUsuarios();
let usuarios = JSON.parse(localStorage.getItem('usuarios'));


const generarListaUsuarios = () => {
  usuarios.forEach(u => {
    document.getElementById('lista-usuarios').innerHTML += 
    `<div class="usuario" onclick="seleccionarUsuario(${u.id}, this)">
      <img src="assets/img/${u.imagenPerfil}">
      <div class="etiqueta"${u.nombre}</div>
    </div>`;
  });
}

generarListaUsuarios();

const seleccionarUsuario = (idUsuario, etiqueta) => {
  usuarioSeleccionado = idUsuario;
  document.querySelectorAll('.usuario').forEach(e => {
    e.classList.remove('seleccionado');
  })
  etiqueta.classList.add('seleccionado');
  console.log('Usuario seleccionado', idUsuario);
} 

const perfilSiguiente = () => {
  if (perfilActual == (usuarios.length - 1)) {
    perfilActual = 0;  
  }  else {
    perfilActual++;
  }

  console.log('Perfil a mostrar', usuarios[perfilActual]);
  
  const usuarioAutenticado = usuarios.filter(u => u.id === usuarioSeleccionado)[0];
  if (usuarioAutenticado.generoInteres.includes(usuarios[perfilActual].genero)) {
    renderizarPerfil(usuarios[perfilActual]);
  } else {
    perfilSiguiente();
  }
}

const perfilAnterior = () => {
  if (perfilActual == 0) {
    perfilActual = usuarios.length - 1;
  } else {
    perfilActual--;
  }
  console.log('Perfil a mostrar', usuarios[perfilActual]);
  const usuarioAutenticado = usuarios.filter(u => u.id === usuarioSeleccionado)[0];
  if (usuarioAutenticado.generoInteres.includes(usuarios[perfilActual].genero)) {
    renderizarPerfil(usuarios[perfilActual]);
  } else {
    perfilAnterior();
  }
}

const renderizarPerfil = (usuario) => {
    document.getElementById('detalle-perfil').innerHTML = 
      `<div class="perfil" style="background-image: url(assets/img/${usuario.imagenPortada});">
        <div class="informacion-perfil">
          <div>
            <span class="nombre">${usuario.nombre}</span>
            <span class="edad">${usuario.edad}</span>  
            ${usuario.verificado ? '<span class="icono-check"><i class="fa-solid fa-circle-check"></i></span>' : ''}
          </div>
          <div>
            <span><i class="fa-solid fa-briefcase"></i></span>
            <span>${usuario.ocupacion}</span>
          </div>
          <div>
            <span><i class="fa-solid fa-location-dot"></i></span>
            <span>${usuario.ciudad}</span>
          </div>
          <div class="contenedor-gustos">
            <div class="item-gusto">Pelear</div>
            <div class="item-gusto">Comer</div>
            <div class="item-gusto">Genkidamas</div>
          </div>
        </div>
      </div>`;
}