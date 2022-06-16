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