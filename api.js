import axios from 'axios';

function getArticles() {
    return axios
    .get("https://my-nc-news-e0va.onrender.com/api/articles")
    .then((result) => {
        return result.data;
    })
    .catch(() => {
        return Promise.reject();
    })
}

function getArticlesById(id) {
    return axios.get(`https://my-nc-news-e0va.onrender.com/api/articles/${id}`)
    .then((result) => {
        return result.data;
    })
    .catch(() => {
        return Promise.reject();
    })
}

export { getArticles, getArticlesById }