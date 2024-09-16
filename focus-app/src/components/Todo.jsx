// React Sources
import { useState,useContext } from "react";
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
import AddTask from "./AddTask";

// Data
import { userContext } from "../App";

function Todo(){
    const [userInfo, setUserInfo] = useContext(userContext);

    const task = userInfo.tasks;

    const taskMap = task.map((task) => {
        return(
        <div key={task.id} className="flex gap-6 flex-row items-center px-4 border-2 border-orange-400 w-[95%] h-16 rounded-md">
            <input type="checkbox" id={task.id} onClick={handleCheckbox} className=""></input>
            <h1 className="flex font-semibold text-orange-400">{task.taskName}</h1>
        </div>
        )
    })

    function handleCheckbox(event){
        console.log(event.target.id)
        let taskId = Number(event.target.id);

        if (confirm("Is this task finished?")){
            
          setUserInfo((prevState) => {
          
            const taskDiff = prevState.tasks.find((task) => task.id === taskId);
            if (!taskDiff) {
                console.log("Not Founds")
                return prevState
            }
            const taskUpdate = prevState.tasks.filter((task) => task.id !== taskId);
            const rewardUpdate = prevState.reward + taskDiff.difficulty;

            const taskUpdateNumber = taskUpdate.length;
           
            return {
                ...prevState,
                tasks: taskUpdate,
                taskNumber: taskUpdateNumber,
                reward: rewardUpdate
            }
          }); 
            
        } 
    }
    return (
        <>
            <div className="flex justify-center py-6 h-full w-full">
                {userInfo.taskNumber == 0 ? 
                    (<div className="flex flex-col justify-center align-middle">
                        <img src={noTask} alt="No Task Image FIller" className="lg:h-[40vw] md:h-[50vw]"/>
                        <h2 className="text-center text-xl font-semibold">It seems you don't have any tasks at the moment...</h2>
                    </div>) :
                    (<>
                        <div className=" flex gap-6 px-10 flex-col w-full">
                            {taskMap}
                        </div>
                    </>)
                }
                {userInfo.isAddingTask == true ? <AddTask /> : ""}

            </div>
        </>
    )
}

export default Todo