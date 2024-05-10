import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Link to={`/`}>
            <h1 className="title">NC News</h1>
        </Link>
    )
}