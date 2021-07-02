const filmes = [
    {
titulo: "Dilema das redes",
id: 1,
descrição: "Documentário sobre tecnologia",
duração:120
    },
    {
        titulo: "Us",
        id: 2,
        descrição: "Filme de terror",
        duração:130
            },
            {
                titulo: "Run",
                id: 3,
                descrição: "Filme de suspense",
                duração:135
                    },
                    ]
  const [{id, titulo, descrição, duração}] = filmes
  filmes.map(filme => console.log(filme.id, filme.titulo, filme.descrição, filme.duração))