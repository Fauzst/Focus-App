// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useEffect } from 'react';

// Context
import { userContext } from '../App';

function Leisure() {
  const [userInfo, setUserInfo] = useContext(userContext);
  const [play, setPlay] = useState(false);
  const [totalSecs, setTotalSecs] = useState(1000000); // Set the initial total seconds

  useEffect(() => {
    let interval;
    
    if (play && totalSecs > 0) {
      interval = setInterval(() => {
        setTotalSecs((prevSecs) => prevSecs - 1);

        const hrsDisplay = Math.floor(totalSecs / 3600);
        const minsDisplay = Math.floor((totalSecs % 3600) / 60);
        const secsDisplay = totalSecs % 60;

        setUserInfo((prevState) => ({
          ...prevState,
          time: {
            hoursDisplay: hrsDisplay,
            minutesDisplay: minsDisplay,
            secondsDisplay: secsDisplay,
          },
        }));
      }, 1000);
    }

    // Clear interval when component unmounts or when play is set to false
    return () => clearInterval(interval);
  }, [play, totalSecs, setUserInfo]);

  function handlePlayTimer() {
    setPlay((prevPlay) => !prevPlay); // Toggle play state
  }

  return (
    <>  
      <div className="flex justify-center align-middle items-center flex-col">
        <h1 className="text-orange-500 font-bold text-4xl py-6 px-10">
          This is your Free Time!!!
        </h1>
        
        <h1 className="text-orange-500 font-bold text-8xl">
          {`${userInfo?.time?.hoursDisplay?.toString().padStart(2, '0')} : ${userInfo?.time?.minutesDisplay?.toString().padStart(2, '0')} : ${userInfo?.time?.secondsDisplay?.toString().padStart(2, '0')}`}
        </h1>

        <FontAwesomeIcon 
          onClick={handlePlayTimer} 
          icon={faPlay} 
          className="fixed bottom-52 text-orange-500 h-44 w-44" 
        />
      </div>
    </>
  );
}

export default Leisure;
