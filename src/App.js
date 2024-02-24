
import './App.css';
import {useEffect, useState} from "react";
function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Increment time by 10 milliseconds
      }, 10); // Run every 10 milliseconds
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Clear interval on unmount
  }, [running]); // Add running to dependency array

  return (
    <div className='max-w-md flex flex-col items-center justify-center py-8'>
    <h1 className='text-3xl font-semibold pb-2'>STOPWATCH</h1>
      <div className='text-xl font-semibold'>
         <span>{("0" + Math.floor((time/6000) %60)).slice(-2)}:</span>
         <span>{("0" + Math.floor((time/1000) %60)).slice(-2)}:</span>
         <span>{("0" + ((time/10) %100)).slice(-2)}</span>
      </div>
      
      <div className=' w-1/3 flex flex-row justify-between'>
        {running ? (
          <button className='border rounded-lg py-1 px-2'
          onClick={()=>{setRunning(false)}}>Stop
          </button>
        ) : (
          <button className='border rounded-lg py-1 px-2'
          onClick={()=>{setRunning(true)}}>Start
          </button>
        )}
        <button className='border rounded-lg py-1 px-2'
        onClick={()=>{setTime(0)}}>Reset
        </button>
      </div>
    </div>
      
  );
}

export default App;
