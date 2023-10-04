import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import Timecode from 'react-timecode';
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { KeyboardDoubleArrowRight } from '@mui/icons-material';
// import { IconButton } from '@mui/material';


const TimerDisplay: React.FC<{ children: string }> = ({ children }) => {
  return (
    <span className="bg-blue-500 text-white rounded-lg px-3 py-2 w-20 text-xl">
      {children}
    </span>
  );
};

export const Timer: React.FC<{ expiryTimestampInSeconds: number }> = ({
                                                                        expiryTimestampInSeconds,
                                                                      }) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: new Date(new Date().getTime() + expiryTimestampInSeconds * 1000),
    onExpire: () => console.warn('onExpire called'),
  });

  const [showActions, setShowActions] = useState(false);

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Timecode format={'H:?mm:ss'} time={totalSeconds * 1000} as={TimerDisplay} />
      <div className="flex justify-center items-center">
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={pause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resume} disabled={isRunning}>
          Resume
        </button>
        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
          disabled={isRunning}
        >
          Restart
        </button>
          <KeyboardDoubleArrowRight />
      </div>
      {showActions && (
        <div className="flex flex-col items-center">
          {/* Render additional timer actions here */}
          <button>Custom Action 1</button>
          <button>Custom Action 2</button>
          {/* Add more actions as needed */}
        </div>
      )}
    </div>
  );
};
