import axios, { AxiosResponse } from "axios";

export interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

const API_KEY = "9b6485a98f1d2b58864153d53d56cd51";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "?language=pt-BR";

// função que pega os dados dos melhores filmes
export const getAllMovies = async (): Promise<Movie[]> => {
  try {
    const allMovies: Movie[] = [];
    let currentPage = 1;
    const totalPages = 30;
    while (currentPage <= totalPages) {
      const response: AxiosResponse = await axios.get(
        `${BASE_URL}/movie/top_rated${LANGUAGE}`,
        {
          params: {
            api_key: API_KEY,
            page: currentPage,
          },
        }
      );

      const moviesInPage: Movie[] = response.data.results;
      allMovies.push(...moviesInPage);
      currentPage++;
    }

    return allMovies;
  } catch (error) {
    console.error("Erro ao buscar filmes.", error);
    throw error;
  }
};

// função que realizar a pesquisa dos filmes no banco de dados
export const getAllMoviesBySearchTerm = async (searchTerm: string): Promise<Movie[]> => {
  const allResults: Movie[] = [];
  let currentPage = 1;
  let totalPages = 10;

  try {
    while (currentPage <= totalPages) {
      const response = await axios.get(`${BASE_URL}/search/movie${LANGUAGE}`, {
        params: {
          api_key: API_KEY,
          query: searchTerm,
          page: currentPage,
        },
      });

      const { results, total_pages } = response.data;
      allResults.push(...results);
      totalPages = total_pages;
      currentPage++;
    }

    return allResults;
  } catch (error) {
    console.error("Erro de Busca na API", error);
    throw error;
  }
};
