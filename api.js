import axios from 'axios';

export default function getArticles() {
    return axios
    .get("https://my-nc-news-e0va.onrender.com/api/articles")
    .then((result) => {
        return result.data
    })
    .catch(() => {
        return Promise.reject()}
    )
}