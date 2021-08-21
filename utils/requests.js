const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        urls: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        urls: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action",
        urls: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        urls: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        urls: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        urls: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery: {
        title: "Mystery",
        urls: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi: {
        title: "Sci-Fi",
        urls: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern: {
        title: "Western",
        urls: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation: {
        title: "Animation",
        urls: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTV: {
        title: "TV Movies",
        urls: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
};
