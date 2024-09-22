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

    //INSERT TIMER HERE WITH REWARD ALGORITHM

  return (
    <>  
      <div className="flex justify-center align-middle items-center flex-col">
        <h1 className="text-orange-500 font-bold text-4xl py-6 px-10">
          This is your Free Time!!!
        </h1>
        <h1>asdfsd</h1>
        <h1>asdfsd</h1>
        <h1>as3</h1>
        <h1>xcv</h1>
        <h1>sdfsd</h1>
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
