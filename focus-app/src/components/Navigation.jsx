import {Link, Routes, Route} from "react-router-dom";
import Pomodoro from "./Pomodoro";
import Leisure from "./Leisure";
import Todo from "./Todo";
function Navigation(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to ="/">Todo List</Link></li>
                    <li><Link to ="/pomodoro">Pomodoro</Link></li>
                    <li><Link to="/leisure">Leisure</Link></li>
                </ul>
            </nav>
               
        </>       
    )
}

export default Navigation