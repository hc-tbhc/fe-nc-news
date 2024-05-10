import { useState, useEffect } from "react";
import { getCommentsById } from "../../api";

export default function Comments({id, comments, setComments}) {
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        getCommentsById(id)
        .then((commentData) => {
            setComments(commentData.comments);
            return <h2>Comment posted</h2>
        })
        .catch((error) => {
            if (error) {
                setErrorMsg('Start the discussion!')
            }
        })
    }, [])

    if (comments.length === 0) {
        return <h2 className="empty-thread-msg">{errorMsg}</h2>
    }

    return (
        <>
        {comments.map((comment) => {
            return (
                <div className="comment">
                <h2>{comment.author}</h2>
                <p>{comment.created_at}</p>
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