import axios from '../config/axios';
import { ENV } from '../config/env';

const MoviesService = {};

MoviesService.getAllMovies = async () => {
    const result = await axios.get(`${ENV.baseApiUrl}/movie/popular?api_key=${ENV.apiKey}&language=en-US`);

    return result.data;
};

MoviesService.getMovieDetail = async id => {
    const result = await axios.get(`${ENV.baseApiUrl}/movie/${id}?api_key=${ENV.apiKey}&language=en-US`);

    return result.data;
};

MoviesService.searchMovie = async query => {
    const result = await axios.get(
        `${ENV.baseApiUrl}/search/movie?api_key=${ENV.apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
    );

    return result.data;
};

export default MoviesService;
