import { useParams } from "react-router-dom";
import { getArticlesById } from "../../api";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Article() {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getArticlesById(id)
        .then((articleData) => {
            setArticle(articleData.article);
            setIsLoading(false);
        })
        .catch((error) => {
            return error;
        })
    }, [])

    // if (error) {
    //     return <h1>{error}</h1>;
    // }

    return isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
            <h1 className="article-title">{article.title}</h1>
            <Link to={``}>
                <h2>{article.author}</h2>
            </Link>
            <h2>{article.created_at}</h2>
            <br></br>
            <br></br>
            <img className="article-image" src={article.article_img_url} alt="Article Image"></img>
            <br></br>
            <br></br>
            <h2>{article.body}</h2>
            <br></br>
            <br></br>
            <div className="vote">
                <button>Like</button>
                <h3>{article.votes}</h3>
                <button>Dislike</button>
            </div>
            <br></br>
            <br></br>
        </div>
      )
}