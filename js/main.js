const API_KEY = 'SUA_CHAVE_DE_API'; // Substitua pela sua chave de API
const FOLDER_ID = '1kX7Jyu_aJ-RMrXRca2I_lMYNT7IC4pr_'; // ID da pasta do Google Drive

async function fetchVideosFromDrive() {
  const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`;
  const response = await fetch(url);
  const data = await response.json();
  return data.files.filter(file => file.mimeType === 'video/mp4'); // Filtra apenas vídeos
}

fetchVideosFromDrive().then(videos => {
  const container = document.getElementById('cursos-lista');
  videos.forEach(video => {
    const card = document.createElement('a');
    card.className = 'curso-card';
    card.href = `curso.html?id=${video.id}`;
    card.innerHTML = `
      <h2>${video.name}</h2>
      <p>Assista agora!</p>
    `;
    container.appendChild(card);
  });
});
