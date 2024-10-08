import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom"; // <-- Import useLocation

//Contexts
import { PageContext } from "../App";
import { userContext } from "../App";

function Navigation() {
    const [currentPage, setCurrentPage] = useContext(PageContext);
    const location = useLocation();  // <-- Get the current route from useLocation
    const [userInfo, setUserInfo] = useContext(userContext);
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

    function handleAddTask(event){
        setUserInfo((prevState) => ({
            ...prevState,
            isAddingTask: !prevState.isAddingTask
        }))
        
        console.log(userInfo.isAddingTask)
    }

    return (
        <nav>
            <ul>
                
                <li className="border-b py-4 px-2 font-semibold text-white"><Link to="/">Todo List</Link></li>
                <li className="border-b py-4 px-2 font-semibold text-white"><Link to="/pomodoro">Pomodoro</Link></li>
                <li className="border-b py-4 px-2 font-semibold text-white"><Link to="/leisure">Leisure</Link></li>
                { location.pathname == "/" &&
                <li className="border-b py-4 px-2 font-semibold text-white" onClick={handleAddTask}>Add Task</li>
                }
            </ul>
        </nav>
    );
}

export default Navigation;
