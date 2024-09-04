// React Sources
import { useState } from "react";
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


function Todo(){
    
    return (
        <>
            <div className="flex justify-center py-6 h-full w-full">
                {/*userState.taskNumber == 0 && 
                    <div className="flex flex-col justify-center align-middle">
                        <img src={noTask} alt="No Task Image FIller" className="lg:h-[40vw] md:h-[50vw]"/>
                        <h2 className="text-center text-xl font-semibold">It seems you don't have any tasks at the moment...</h2>
                    </div>
                */}
            </div>
        </>
    )
}

export default Todo