const API_KEY = "7b8225548bf35b0dbb49a3bc05d20a0e";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getFilmes() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`,
  );

  return res.json();
}
