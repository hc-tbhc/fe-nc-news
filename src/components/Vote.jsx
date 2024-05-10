import { useState } from "react";
import { patchArticleVotes } from "../../api"

export default function Vote({id, articleVotes}) {
    const [newVote, setNewVote] = useState(Number(articleVotes));
    const [errorMsg, setErrorMsg] = useState(null);
    
    function handleVote(addToVote) {
        setNewVote((voteToChange) => voteToChange + addToVote);

        patchArticleVotes(id, {
            inc_votes: addToVote,
            article_id: id
        })
        .catch(() => {
            setNewVote((voteToChange) => voteToChange - addToVote);
            setErrorMsg('Failed to vote')
        })
    }

    if (errorMsg) {
        return <p>{errorMsg}</p>
    }

    return (
        <div className="article-vote">
            <button onClick={() => {handleVote(1)}}>Like</button>
            <button onClick={() => {handleVote(-1)}}>Dislike</button>
            <p>Votes: {newVote}</p>
        </div>
    )
}