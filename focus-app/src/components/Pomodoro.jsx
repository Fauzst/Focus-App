// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faPause } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useEffect } from 'react';


function Pomodoro(){
    
    //TRY TINKERING THE TIMER ON THE LEISURE
    //ALSO DO THE UI OF THE CLOCK AND TICKS

    //I dont have time today for this huhu
    return (
        <>
            <div className="flex justify-center align-middle">
                <div className="w-80 h-80 fixed top-56 flex justify-center align-middle items-center rounded-full bg-orange-500">
                    <div className="w-72 h-72 fixed flex justify-center align-middle items-center bg-amber-100 rounded-full">
                        <div className="flex justify-center pl-6 items-center w-64 h-64 bg-orange-500 rounded-full">
                            <FontAwesomeIcon 
                                 icon={faPlay} 
                                 className='w-40 h-40 text-amber-100'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between px-40 py-96">
                <div className="flex flex-row gap-4">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                </div>
            </div>
        </>
    )
}

export default Pomodoro