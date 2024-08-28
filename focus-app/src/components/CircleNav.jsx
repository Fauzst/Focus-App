import { useState } from "react";
import {Link, Routes, Route} from "react-router-dom";
import Pomodoro from "./Pomodoro";
import Leisure from "./Leisure";
import Todo from "./Todo";
function CircleNav(){
    const [activeNav, setActiveNav] = useState(false);

    function handleNavClick(){
        setActiveNav(prev => !prev);
        console.log("try");
    }

    function handleChildClick(event){
        event.stopPropagation();
    }

    return(
        <>
            <div className="z-0 h-full w-full" onClick={handleNavClick}>
   
                    <>  
                        <div className="z-50 h-20 w-20 rounded-full fixed bg-green-600"></div>
                        <div className={`flex items-center justify-center z-10 rounded-full  h-16 w-16 bg-red-200 fixed bottom-14 right-10 ${activeNav ? 'animate-slideRight1' : 'animate-slideLeft1'}`} onClick={handleChildClick}>
                            <nav>
                                <ul>
                                    <Link to="/" className="py-5 px-6 rounded-full w-full h-full bg-yellow-400">1</Link>
                                </ul>
                            </nav>
                        </div>
                        <div className={`flex items-center justify-center z-10 rounded-full h-16 w-16 bg-red-200 fixed bottom-14 right-10 ${activeNav ? 'animate-slideRight2' : 'animate-slideLeft2'}`} onClick={handleChildClick}>
                            <nav>
                                <ul>
                                    <Link to="/pomodoro" className="py-5 px-6 rounded-full w-full h-full bg-yellow-400">2</Link>
                                </ul>
                            </nav>
                        </div>
                        <div className={`flex items-center justify-center z-10 rounded-full h-16 w-16 bg-red-200 fixed bottom-[9rem] right-10 ${activeNav ? 'animate-slideTop' : 'animate-slideDown'}`} onClick={handleChildClick}>
                            <nav>
                                <ul>
                                    <Link to="/leisure" className="py-5 px-6 rounded-full w-full h-full bg-yellow-400">3</Link>
                                </ul>
                            </nav>
                        </div>
                    </>

            </div>     
        </>       
    )
}

export default CircleNav