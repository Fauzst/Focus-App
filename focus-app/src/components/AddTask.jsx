// React Resources
import { useContext, useEffect } from "react"

//Context
import { userContext } from "../App"

function AddTask(){
    
    const [userInfo, setUserInfo] = useContext(userContext);
    

    //Handle Accept Click on Add Task
    function handleAcceptClick(e){
        // For getting User Inputs on the Added Task
        const taskNaming = document.getElementById("task-name").value;
        const taskDifficulty = document.getElementById("difficulty").value;
        const taskDescription = document.getElementById("description").value;
        


        //id maker
        const tasksArray = userInfo.tasks
        var currentId = 0;
        for (let task of tasksArray){
           if (task.id > currentId){
            currentId = task.id;
            
           }
        }

        var newId = currentId + 1;

        var newTask = {
            id: newId,
            taskName: taskNaming,
            description: taskDescription,
            difficulty: taskDifficulty
        }

        

        const addedTasks = userInfo.tasks;
        
        var taskLength = addedTasks.length;
        

        setUserInfo((prevState) => ({
            ...prevState,
            tasks: [...prevState.tasks, newTask],
            taskNumber: taskLength
        }))

        console.log(userInfo.tasks);
    }

    //Handle Cancel Click on Add Task
    function handleCancelClick(){
        setUserInfo((prevState) => ({
            ...prevState,
            isAddingTask: !prevState.isAddingTask
        }))
    }

    return (
        <>
           <div className="border-4 border-orange-600 bg-orange-200 h-[45%] w-[60%] rounded-md fixed bottom-64">
                    <div className="flex flex-col gap-y-4 py-5 px-8">
                        <label  htmlFor="taskName" className="font-semibold text-xl">Task Name:</label>
                        <input id="task-name" type="text" className="h-10 bg-orange-100 border-2 border-orange-300 rounded-md px-5"/>
                        <label htmlFor="description" className="font-semibold text-xl">Description:</label>
                        <input id="description" type="text" className="h-10 bg-orange-100 border-2 border-orange-300 rounded-md px-5" />
                        <label htmlFor="difficulty" className="font-semibold text-xl">Difficulty:</label>
                        <input id="difficulty" type="range" min="1" max="5" />
                    </div>
                    <div className="flex flex-row justify-around">
                        <button onClick={handleAcceptClick} className="bg-green-300 py-2 px-14 font-semibold text-white border-4 border-green-500 rounded-md hover:bg-green-500" >Accept</button>
                        <button onClick={handleCancelClick} className="bg-red-300 py-2 px-14 font-semibold text-white border-4 border-red-500 rounded-md hover:bg-red-500">Cancel</button>
                    </div>
            </div>
        </>
    )
}

export default AddTask