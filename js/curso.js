function getCursoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

fetch('data/cursos.json')
  .then(res => res.json())
  .then(cursos => {
    const id = getCursoId();
    const curso = cursos.find(c => c.id === id);
    if (!curso) return;

    document.getElementById('titulo-curso').innerText = curso.titulo;
    const player = document.getElementById('video-player');
    const lista = document.getElementById('lista-aulas');

    // Inicia com o primeiro vídeo
    player.src = curso.videos[0].url;

    curso.videos.forEach(video => {
      const li = document.createElement('li');
      li.innerText = video.titulo;
      li.onclick = () => {
        player.src = video.url;
      };
      lista.appendChild(li);
    });
  });
