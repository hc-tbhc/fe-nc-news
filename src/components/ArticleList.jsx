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
                <div className="article-card">
                    <Link to={`/articles/${article.article_id}`}>
                    <h1>{article.title}</h1>
                    </Link>
                    <div className="article-stats">
                    <Link to={``}>
                    <p>{article.author}</p>
                    </Link>
                    <p>Votes: {article.votes}</p>
                    <p>Comments: {article.comment_count}</p>   
                    </div>
                </div>
            )
        })}
        </>
    )
} 