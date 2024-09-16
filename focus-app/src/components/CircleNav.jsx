import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // <-- Import useLocation

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClock, faUmbrellaBeach, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

// Contexts
import { PageContext } from "../App";
import { userContext } from "../App";

function CircleNav() {
    const [activeNav, setActiveNav] = useState(false);
    const [currentPage, setCurrentPage] = useContext(PageContext);
    const location = useLocation();  // <-- Get the current location
    const [userInfo,setUserInfo] = useContext(userContext);

    // Update currentPage based on the current route
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
    }, [location.pathname, setCurrentPage]);  // Trigger useEffect whenever the route changes

    function handleNavClick() {
        setActiveNav(prev => !prev);
    }

    function handleAddTask(event){
        setUserInfo((prevState) => ({
            ...prevState,
            isAddingTask: !prevState.isAddingTask
        }))
        
        console.log(userInfo.isAddingTask)
    }

    return (
        <>
            <div className="z-0 h-full w-full" onClick={handleNavClick}>
                <>
                    {/* Main Circle Navigation */}
                    <div className={`flex justify-center items-center z-50 h-20 w-20 rounded-full fixed bg-orange-500 ${activeNav ? 'animate-spinRight' : 'animate-spinLeft'}`}>
                        <FontAwesomeIcon icon={faPlus} className="h-10 text-white" />
                    </div>
                    
                    <div className={`flex items-center justify-center z-10 rounded-full  h-16 w-16 bg-orange-500 fixed bottom-14 right-10 ${activeNav ? 'animate-slideRight1' : 'animate-slideLeft1'}`}>
                        <nav>
                            <ul>
                                <Link name="leisure" to="/leisure" className="py-5 px-6 rounded-full w-full h-full">
                                    <FontAwesomeIcon icon={faUmbrellaBeach} className="text-white" />
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className={`flex items-center justify-center z-10 rounded-full h-16 w-16 bg-orange-500 fixed bottom-14 right-10 ${activeNav ? 'animate-slideRight2' : 'animate-slideLeft2'}`}>
                        <nav>
                            <ul>
                                <Link name="pomodoro" to="/pomodoro" className="py-5 px-6 rounded-full w-full h-full ">
                                    <FontAwesomeIcon icon={faClock} className="text-white" />
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    
                    <div onClick={handleAddTask} className={`flex items-center justify-center z-10 rounded-full h-16 w-16 bg-orange-500 fixed bottom-[9rem] right-10 ${activeNav ? 'animate-slideTop' : 'animate-slideDown'}`}>
                        <nav>
                            <ul>
                                <Link name="todo" to="/" className="py-5 px-6 rounded-full w-full h-full">
                                    <FontAwesomeIcon icon={faFileCirclePlus} className="text-white" />
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </>
            </div>
        </>
    );
}

export default CircleNav;
