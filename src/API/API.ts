import axios from "axios";

const API_KEY = "9b6485a98f1d2b58864153d53d56cd51";
const BASE_URL = "https://api.themoviedb.org/3";


const MIN_ID = 10;
const MAX_ID = 300;

export const getMovieData = async (movieId: number) => {
  // Verifica se o ID está dentro do intervalo permitido
  if (movieId < MIN_ID || movieId > MAX_ID) {
    throw new Error(
      `Movie ID out of range. Please provide an ID between ${MIN_ID} and ${MAX_ID}.`
    );
  }

  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};
