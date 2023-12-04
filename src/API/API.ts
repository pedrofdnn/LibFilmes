import axios, { AxiosResponse } from "axios";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

const API_KEY = "9b6485a98f1d2b58864153d53d56cd51";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "?language=pt-BR";

let topRatedMovies: Movie[] = [];

// função que pega os dados dos melhores filmes
export const getTopRatedMovies = async (): Promise<Movie[]> => {
  try {
    if (topRatedMovies.length === 0) {
      const response: AxiosResponse = await axios.get(
        `${BASE_URL}/movie/top_rated${LANGUAGE}`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      );
      topRatedMovies = response.data.results;
    }
    return topRatedMovies;
  } catch (error) {
    console.error("Erro de busca dos Mais Votados na API.", error);
    throw error;
  }
};

// função que realizar a pesquisa dos filmes no banco de dados
export const getMoviesBySearchTerm = async (
  searchTerm: string
): Promise<Movie[]> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/search/movie${LANGUAGE}`,
      {
        params: {
          api_key: API_KEY,
          query: searchTerm,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro de Busca na API", error);
    throw error;
  }
};
