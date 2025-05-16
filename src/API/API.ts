import axios, { AxiosResponse } from "axios";

export interface Movie {
  release_date?: string;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path?: string;
}

const API_KEY = "9b6485a98f1d2b58864153d53d56cd51";
const BASE_URL = "https://api.themoviedb.org/3";

// função que pega os dados dos melhores filmes
export const getAllMovies = async (page: number): Promise<Movie[]> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/movie/top_rated`,
      {
        params: {
          api_key: API_KEY,
          language: "pt-BR",
          page: page,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro com a API dos filmes favoritos.", error);
    throw error;
  }
};

// função que realizar a pesquisa dos filmes no banco de dados
export const getAllMoviesBySearchTerm = async (
  searchTerm: string,
  page: number
): Promise<Movie[]> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/search/movie`,
      {
        params: {
          api_key: API_KEY,
          language: "pt-BR",
          query: searchTerm,
          page: page,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro de Busca na API", error);
    throw error;
  }
};
