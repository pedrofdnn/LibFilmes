import axios, { AxiosResponse } from "axios";
import { json } from "react-router-dom";

export interface Movie {
  movie: Movie | null;
  release_date?: string;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path?: string;
}

const API_KEY = "9b6485a98f1d2b58864153d53d56cd51";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "?language=pt-BR";

// função que pega os dados dos melhores filmes
export const getAllMovies = async (page: number): Promise<Movie[]> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}movie/top_rated${LANGUAGE}&page=${page}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    console.log(response.data); // Adicionando um console.log para visualizar a resposta

    return response.data.results;
  } catch (error) {
    console.error("Erro com a API dos filmes favoritos.", error);
    throw error;
  }
};
  
// função que realizar a pesquisa dos filmes no banco de dados
export const getAllMoviesBySearchTerm = async (
  searchTerm: string
): Promise<Movie[]> => {
  const allResults: Movie[] = [];
  const maxPages = 40; // Defina o número máximo de páginas a serem buscadas
  let currentPage = 1;

  try {
    for (currentPage = 1; currentPage <= maxPages; currentPage++) {
      const response = await axios.get(`${BASE_URL}/search/movie${LANGUAGE}`, {
        params: {
          api_key: API_KEY,
          query: searchTerm,
          page: currentPage,
        },
      });

      const { results, total_pages } = response.data;
      allResults.push(...results);

      // Se não houver mais resultados ou atingiu o limite de páginas, saia do loop
      if (currentPage >= total_pages || currentPage >= maxPages) {
        break;
      }
    }

    return allResults;
  } catch (error) {
    console.error("Erro de Busca na API", error);
    throw error;
  }
};
