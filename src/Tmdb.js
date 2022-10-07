const API_KEY = 'e73d133af62b0718a4723f53986225f0';
const API_BASE = 'https://api.themoviedb.org/3';
const languageAndApiKey = `language=pt-BR&api_key=${API_KEY}`;

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const getHomeList = async () => {
    return [
       {
           slug: 'originals',
           title: 'Originais Netflix',
           items: await basicFetch(`/discover/tv?with_network=213&${languageAndApiKey}`)
       },
       {
           slug: 'trending',
           title: 'Recomendados para Você',
           items: await basicFetch(`/trending/all/week?${languageAndApiKey}`)
       },
       {
           slug: 'toprated',
           title: 'Em Alta',
           items: await basicFetch(`/movie/top_rated?${languageAndApiKey}`)
       },
       {
           slug: 'action',
           title: 'Ação',
           items: await basicFetch(`/discover/movie?with_genres=28&${languageAndApiKey}`)
       },
       {
           slug: 'comedy',
           title: 'Comédia',
           items: await basicFetch(`/discover/movie?with_genres=35&${languageAndApiKey}`)
       },
       {
           slug: 'horror',
           title: 'Terror',
           items: await basicFetch(`/discover/movie?with_genres=27&${languageAndApiKey}`)
       },
       {
           slug: 'romance',
           title: 'Romance',
           items: await basicFetch(`/discover/movie?with_genres=10749&${languageAndApiKey}`)
       },
       {
           slug: 'documentary',
           title: 'Documentários',
           items: await basicFetch(`/discover/movie?with_genres=99&${languageAndApiKey}`)
       },
    ];
};

const Tmdb = {
    getHomeList,
};

export default Tmdb;