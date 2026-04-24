import { getFilmes } from "./api.js";

const container = document.getElementById("filmes");

async function carregarFilmes() {
  const data = await getFilmes();

  container.innerHTML = "";

  data.results.forEach((filme) => {
    container.innerHTML += `
      <div class="col-6 col-md-3 col-lg-2">
        <div class="card bg-dark text-light h-100 border-0 shadow">
          
          <img 
            src="https://image.tmdb.org/t/p/w500${filme.poster_path}" 
            class="card-img-top"
          >

          <div class="card-body d-flex flex-column">
            <h6 class="card-title">${filme.title}</h6>
            
            <p class="small text-secondary">
              ⭐ ${filme.vote_average}
            </p>

            <button class="btn btn-outline-light mt-auto">
              Favoritar
            </button>
          </div>

        </div>
      </div>
    `;
  });
}

carregarFilmes();
