import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDc3ZTRmNTkzYjkyZWIxYmYxYmJhYWZiZjIyYWEyNiIsInN1YiI6IjY2MDQzOTJlODFkYTM5MDE3ZGMyZDk5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Euvj6kId4WMD93cM2n03ZKN0W8_wHZMcRqBdSRMj5qk";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

