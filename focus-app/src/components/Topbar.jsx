// React Sources
import { useContext, useState } from "react";
import {Link, Routes, Route} from "react-router-dom";

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faUmbrellaBeach} from '@fortawesome/free-solid-svg-icons'
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons'

//Images
import noTask from '../assets/no-task.png'

//Components
import Pomodoro from "./Pomodoro";
import Leisure from "./Leisure";


// Data
import { PageContext } from "../App";


function Topbar(){
    const [currentPage, setCurrentPage] = useContext(PageContext);


    return (
        <>

            
                <h1 className="flex justify-center align-middle py-2 text-white font-bold text-6xl">{currentPage}</h1>

        
        </>
    )
}

export default Topbar