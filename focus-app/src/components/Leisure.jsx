// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faPause } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useEffect } from 'react';

// Context
import { userContext } from '../App';

function Leisure() {
  const [userInfo, setUserInfo] = useContext(userContext);
  const [play, setPlay] = useState(false);
  const [totalSecs, setTotalSecs] = useState(10); // Set the initial total seconds

  // This useEffect runs when the `play` state changes or when `totalSecs` updates.
  useEffect(() => {
    let timer;
    if (play && totalSecs > 0) {
      // Set a timeout for 1 second countdown
      timer = setTimeout(() => {
        setTotalSecs(prevSecs => prevSecs - 1);
      }, 1000);
    } else if (totalSecs === 0) {
      setPlay(false); // Stop the timer when it reaches 0
    }

    // Cleanup timeout on component unmount or if `play` or `totalSecs` changes
    return () => clearTimeout(timer);
  }, [play, totalSecs]);

  // Handles toggling the play state
  function handlePlayTimer() {
    setPlay(!play);
  }

  // Format the countdown for display (hours, minutes, seconds)
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = totalSecs % 60;

  return (
    <>  
      <div className="flex justify-center align-middle items-center flex-col">
        <h1 className="text-orange-500 font-bold text-4xl py-6 px-10">
          This is your Free Time!!!
        </h1>

        <h1 className="text-orange-500 font-bold text-8xl">
          {`${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`}
        </h1>
        { (play == true) ?
        <FontAwesomeIcon 
          onClick={handlePlayTimer}
          icon={faPause}
          className="fixed bottom-52 text-orange-500 h-44 w-44" />
        :
        <FontAwesomeIcon 
          onClick={handlePlayTimer} 
          icon={faPlay} 
          className="fixed bottom-52 text-orange-500 h-44 w-44" 
        />
        }
      </div>
    </>
  );
}

export default Leisure;
