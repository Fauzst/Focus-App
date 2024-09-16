
function AddTask(){
    
    return (
        <>
           <div className="border-4 border-orange-600 bg-orange-200 h-[25rem] w-[40rem] rounded-md fixed bottom-64">
                    <div className="flex flex-col gap-y-4 py-5 px-8">
                        <label htmlFor="taskName" className="font-semibold text-xl">Task Name:</label>
                        <input type="text" className="h-10 bg-orange-100 border-2 border-orange-300 rounded-md px-5"/>
                        <label htmlFor="description" className="font-semibold text-xl">Description:</label>
                        <input type="text" className="h-10 bg-orange-100 border-2 border-orange-300 rounded-md px-5" />
                        <label htmlFor="difficulty" className="font-semibold text-xl">Difficulty:</label>
                        <input type="range" min="1" max="5" />
                    </div>
                    <div className="flex flex-row justify-around">
                        <button className="bg-green-300 py-2 px-14 font-semibold text-white border-4 border-green-500 rounded-md hover:bg-green-500" >Accept</button>
                        <button className="bg-red-300 py-2 px-14 font-semibold text-white border-4 border-red-500 rounded-md hover:bg-red-500">Cancel</button>
                    </div>
                </div>
        </>
    )
}

export default AddTask