import { useEffect, useState } from "react";
import getArticles from "../../api";

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
        .then((articlesData) => {
            setArticles(articlesData.sortedArticles);
        })
    }, [])

    return (
        <>
        {articles.map((article) => {
            console.log(article.article_img_url)
            return (
                <div className="article-card">
                    <h1>{article.title}</h1>
                    <p>{article.author}</p>
                </div>
            )
        })}
        </>
    )
} 