import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useEffect } from 'react';
import { userContext } from '../App';

function Pomodoro() {
    const [userInfo, setUserInfo] = useContext(userContext);
    const [play, setPlay] = useState(false);
    const [totalSecs, setTotalSecs] = useState(1200); // Set initial total seconds (20 minutes)

    useEffect(() => {
        let timer;
        if (play && totalSecs > 0) {
            timer = setTimeout(() => {
                setTotalSecs(prevSecs => prevSecs - 1);
            }, 1000);
        } else if (totalSecs === 0) {
            setPlay(false); // Stop the timer when it reaches 0
            setUserInfo(prev => ({ ...prev, reward: prev.reward + 150 })); // Increase reward

            // Delay before resetting the timer
            setTimeout(() => {
                setTotalSecs(1200); // Reset to 20 minutes
            }, 3000); // Delay for 3 seconds
        }

        return () => clearTimeout(timer); // Cleanup timeout
    }, [play, totalSecs, setUserInfo]);

    const handlePlayTimer = () => {
        setPlay(prev => !prev);
    };

    const hours = Math.floor(totalSecs / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;

    return (
        <div className="flex items-center justify-center h-100% w-100% py-48 bg-amber-100">
            <div className="w-80 h-80 flex justify-center items-center rounded-full bg-orange-500 relative">
                <div className="w-72 h-72 flex justify-center items-center bg-amber-100 rounded-full">
                    <div className="flex justify-center items-center w-64 h-64 bg-orange-500 rounded-full">
                        <FontAwesomeIcon 
                            onClick={handlePlayTimer}
                            icon={play ? faPause : faPlay} 
                            className='w-40 h-40 text-amber-100'
                        />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-10 text-5xl font-bold'>
                {`${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`}
            </div>
        </div>
    );
}

export default Pomodoro;
