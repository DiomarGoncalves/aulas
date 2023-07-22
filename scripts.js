function abrirCurso(curso) {
  // Oculta todas as seções de vídeos e módulos
  var videoSections = document.getElementsByClassName("video-section");
  var moduloSections = document.getElementsByClassName("modulo-section");
  for (var i = 0; i < videoSections.length; i++) {
    videoSections[i].style.display = "none";
  }
  for (var i = 0; i < moduloSections.length; i++) {
    moduloSections[i].style.display = "none";
  }

  // Exibe a seção de vídeos ou módulos do curso selecionado
  var cursoSection = document.getElementById(curso);
  if (cursoSection) {
    cursoSection.style.display = "block";
  }
}
function abrirModulo(modulo) {
  // Oculta todas as seções de módulos
  var moduloSections = document.getElementsByClassName("modulo-section");
  for (var i = 0; i < moduloSections.length; i++) {
    moduloSections[i].style.display = "none";
  }

  // Exibe o módulo selecionado
  var moduloSection = document.getElementById(modulo);
  if (moduloSection) {
    moduloSection.style.display = "block";
  }
}
