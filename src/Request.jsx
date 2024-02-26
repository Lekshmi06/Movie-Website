const key = '7d716f6ea82a909791ad5637d0ec3519'

const requests = {
    requestNowplaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestToprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestSearch:`https://api.themoviedb.org/3/search/movie?api_key=${key}&include_adult=false&language=en-US&page=1`,
    requestAiringtv:`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
    requestPopulartv:`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestTop:`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,

}

export default requests