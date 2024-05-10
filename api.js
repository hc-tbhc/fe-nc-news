import axios from 'axios';

function getArticles() {
    return axios
    .get("https://my-nc-news-e0va.onrender.com/api/articles")
    .then((result) => {
        return result.data;
    })
}

function getArticlesById(id) {
    return axios
    .get(`https://my-nc-news-e0va.onrender.com/api/articles/${id}`)
    .then((result) => {
        return result.data;
    })
}

function getCommentsById(id) {
    return axios
    .get(`https://my-nc-news-e0va.onrender.com/api/articles/${id}/comments`)
    .then((result) => {
        return result.data;
    })
}

function patchArticleVotes(id, inc_votes) {
    return axios
    .patch(`https://my-nc-news-e0va.onrender.com/api/articles/${id}`, inc_votes)
    .then((result) => {
        return result.data;
    })
}


export { getArticles, getArticlesById, getCommentsById, patchArticleVotes }