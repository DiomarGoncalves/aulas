fetch('data/cursos.json')
  .then(res => res.json())
  .then(cursos => {
    const container = document.getElementById('cursos-lista');
    cursos.forEach(curso => {
      const card = document.createElement('a');
      card.className = 'curso-card';
      card.href = `curso.html?id=${curso.id}`;
      card.innerHTML = `
        <img src="${curso.thumb}" alt="${curso.titulo}"/>
        <h2>${curso.titulo}</h2>
        <p>${curso.descricao}</p>
      `;
      container.appendChild(card);
    });
  });
