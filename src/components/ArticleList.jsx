import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { Link } from "react-router-dom"

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
            return (
            <Link to={`/articles/${article.article_id}`}>
                <div className="article-card">
                    <h1>{article.title}</h1>
                    <div className="article-stats">
                    <Link to={``}>
                    <p>{article.author}</p>
                    </Link>
                    <p>Votes: {article.votes}</p>
                    <p>Comments: {article.comment_count}</p>   
                    </div>
                </div>
            </Link>
            )
        })}
        </>
    )
} 