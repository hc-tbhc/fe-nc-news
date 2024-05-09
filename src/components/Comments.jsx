import { useState, useEffect } from "react";
import { getCommentsById } from "../../api";

export default function Comments({id}) {
    const [comments, setComments] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        getCommentsById(id)
        .then((commentData) => {
            setComments(commentData.comments);
        })
        .catch((error) => {
            if (error) {
                setErrorMsg('Start the discussion!')
            }
        })
    }, [])

    if (errorMsg) {
        return <h1 className="empty-thread-msg">{errorMsg}</h1>
    }

    return (
        <>
        {comments.map((comment) => {
            return (
                <div className="comment">
                <h2>{comment.author}</h2>
                <h4>{comment.created_at}</h4>
                <h2 className="comment-body">{comment.body}</h2>
                <div className="comment-vote">
                <button className="vote-buttons">Like</button>
                <button className="vote-buttons">Dislike</button>
                <h3>Votes: {comment.votes}</h3>
                </div>
                </div>
            )
        })}
        </>
    )
}