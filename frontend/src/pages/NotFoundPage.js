import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h2>404 — Page not found</h2>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn--secondary">Go home</Link>
        </div>
    )
}

export { NotFoundPage }