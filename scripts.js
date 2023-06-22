function abrirCurso(curso) {
    // Oculta todas as seções de vídeos
    var videoSections = document.getElementsByClassName("video-section");
    for (var i = 0; i < videoSections.length; i++) {
      videoSections[i].style.display = "none";
    }
  
    // Exibe a seção de vídeos do curso selecionado
    var cursoSection = document.getElementById(curso);
    if (cursoSection) {
      cursoSection.style.display = "block";
    }
  }
