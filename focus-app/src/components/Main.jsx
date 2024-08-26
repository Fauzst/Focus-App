import {Routes, Route} from "react-router-dom"
import Todo from "./Todo"
import Pomodoro from "./Pomodoro"
import Leisure from "./Leisure"

function Main(){
    
    return (
        <>
         <Routes>
            <Route path="/" element={<Todo />}>To-do List</Route>
            <Route path="/pomodoro" element={<Pomodoro />}>Pomodoro</Route>
            <Route path="/leisure" element={<Leisure />}>Leisure</Route>
         </Routes>
        </>
    )
}

export default Main