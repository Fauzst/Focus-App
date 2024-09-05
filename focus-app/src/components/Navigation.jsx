import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom"; // <-- Import useLocation
import { PageContext } from "../App";

function Navigation() {
    const [currentPage, setCurrentPage] = useContext(PageContext);
    const location = useLocation();  // <-- Get the current route from useLocation

    // Update currentPage whenever the route changes
    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setCurrentPage("To-do List");
                break;
            case "/pomodoro":
                setCurrentPage("Pomodoro");
                break;
            case "/leisure":
                setCurrentPage("Leisure");
                break;
            default:
                setCurrentPage("Todo");
        }
    }, [location.pathname, setCurrentPage]); // <-- Trigger useEffect whenever location changes

    return (
        <nav>
            <ul>
                <li><Link to="/">Todo List</Link></li>
                <li><Link to="/pomodoro">Pomodoro</Link></li>
                <li><Link to="/leisure">Leisure</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
