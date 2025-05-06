const API_URL = '/api'; // A API será acessada diretamente no mesmo domínio

function getCursoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

fetch(`${API_URL}/cursos/${getCursoId()}/aulas`)
  .then(res => res.json())
  .then(aulas => {
    if (!aulas.length) return;

    const player = document.getElementById('video-player');
    const lista = document.getElementById('lista-aulas');

    // Inicia com o primeiro vídeo
    player.src = `https://drive.google.com/file/d/${aulas[0].video_id}/preview`;

    aulas.forEach(aula => {
      const li = document.createElement('li');
      li.innerText = aula.titulo;
      li.onclick = () => {
        player.src = `https://drive.google.com/file/d/${aula.video_id}/preview`;
      };
      lista.appendChild(li);
    });
  });