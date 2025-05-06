function getCursoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const API_KEY = 'SUA_CHAVE_DE_API'; // Substitua pela sua chave de API
const FOLDER_ID = '1kX7Jyu_aJ-RMrXRca2I_lMYNT7IC4pr_'; // ID da pasta do Google Drive

async function fetchVideosFromDrive() {
  const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`;
  const response = await fetch(url);
  const data = await response.json();
  return data.files.filter(file => file.mimeType === 'video/mp4'); // Filtra apenas vídeos
}

fetchVideosFromDrive().then(videos => {
  const player = document.getElementById('video-player');
  const lista = document.getElementById('lista-aulas');

  // Inicia com o primeiro vídeo
  if (videos.length > 0) {
    player.src = `https://drive.google.com/file/d/${videos[0].id}/preview`;
  }

  videos.forEach(video => {
    const li = document.createElement('li');
    li.innerText = video.name;
    li.onclick = () => {
      player.src = `https://drive.google.com/file/d/${video.id}/preview`;
    };
    lista.appendChild(li);
  });
});
