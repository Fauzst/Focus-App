// React Sources
import { useState } from "react";
import {Link, Routes, Route} from "react-router-dom";

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faUmbrellaBeach} from '@fortawesome/free-solid-svg-icons'
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons'

//Components
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
                        {/* Main Circle Navigation */}
                        <div className={`flex justify-center items-center z-50 h-20 w-20 rounded-full fixed bg-orange-500 ${activeNav ? 'animate-spinRight' : 'animate-spinLeft' }`}><FontAwesomeIcon icon={faPlus} className="h-10 text-white"/></div>
                        <div className={`flex items-center justify-center z-10 rounded-full  h-16 w-16 bg-orange-500 fixed bottom-14 right-10 ${activeNav ? 'animate-slideRight1' : 'animate-slideLeft1'}`} onClick={handleChildClick}>
                            <nav>
                                <ul>
                                    <Link to="/leisure" className="py-5 px-6 rounded-full w-full h-full"><FontAwesomeIcon icon={faUmbrellaBeach} className="text-white"/></Link>
                                </ul>
                            </nav>
                        </div>
                        <div className={`flex items-center justify-center z-10 rounded-full h-16 w-16 bg-orange-500 fixed bottom-14 right-10 ${activeNav ? 'animate-slideRight2' : 'animate-slideLeft2'}`} onClick={handleChildClick}>
                            <nav>
                                <ul>
                                    <Link to="/pomodoro" className="py-5 px-6 rounded-full w-full h-full "><FontAwesomeIcon icon={faClock} className="text-white"/></Link>
                                </ul>
                            </nav>
                        </div>
                        <div className={`flex items-center justify-center z-10 rounded-full h-16 w-16 bg-orange-500 fixed bottom-[9rem] right-10 ${activeNav ? 'animate-slideTop' : 'animate-slideDown'}`} onClick={handleChildClick}>
                            <nav>
                                <ul>
                                    <Link to="/" className="py-5 px-6 rounded-full w-full h-full "><FontAwesomeIcon icon={faFileCirclePlus} className="text-white"/></Link>
                                </ul>
                            </nav>
                        </div>
                    </>

            </div>     
        </>       
    )
}

export default CircleNav