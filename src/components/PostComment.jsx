import { useState } from "react";
import { postCommentToArticle } from "../../api";

export default function PostComment({id, setComments}) {
    const [postStatus, setPostStatus] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null)

    function handleCommentPost(e) {
        e.preventDefault();

        const comment = {
            username: e.target[0].value,
            body: e.target[1].value
        }


        postCommentToArticle(id, comment)
        .then((response) => {
            setComments((current) => {
                return [response.comment, ...current] 
            })
        })
        .catch(() => {
            setErrorMsg('Invalid username');
        })
    }

    if (errorMsg) {
        alert(errorMsg)
    }

    return (
        <div className="post-comment">
            <form className="post-comment-form" onSubmit={handleCommentPost}>
                <h2>Post a comment</h2>
                <div className="comment-input">
                    <input type="text" name="username" placeholder="Username..." required/* readOnly *//>
                </div>
                <div className="comment-input">
                    <textarea name="body" placeholder="Post a comment..." rows="8" cols="104" required/>
                </div>
                <button className="submit-comment" type="submit">Submit</button>
            </form>
        </div>
    )
}