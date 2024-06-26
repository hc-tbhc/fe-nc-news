import { useParams } from "react-router-dom";
import { getArticlesById } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import Vote from "./Vote";
import PostComment from "./PostComment";

export default function Article() {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        getArticlesById(id)
        .then((articleData) => {
            setArticle(articleData.article);
            setIsLoading(false);
        })
        .catch((error) => {
            if (error.response.status === 404) {
                setErrorMsg('404: Not found')
            }

            if (error.response.status === 400) {
                setErrorMsg('400: Bad request')
            }
        })
    }, [])

    if (errorMsg) {
        return <h1>{errorMsg}</h1>
    }

    return isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="single-article">
            <h2 className="article-title">{article.title}</h2>
            <Link to={``}>
                <h2>{article.author}</h2>
            </Link>
            <p>{article.created_at}</p>
            <img className="article-image" src={article.article_img_url} alt="Article Image"></img>
            <h2>{article.body}</h2>
            <Vote id={id} articleVotes={article.votes}/>
            <h2 className="comments-header">Comments</h2>
            <PostComment id={id} setComments={setComments}/>
            <Comments id={id} comments={comments} setComments={setComments}/>
        </div>
      )
}