import { useState, useEffect } from 'react';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch.js';
import Display from './components/Display/Display.js';
import StartPauseButton from './components/StartPauseButton/StartPauseButton.js';
import ResetButton from './components/ResetButton/ResetButton.js';
import MarkerButton from './components/MarkerButton/MarkerButton.js';
import MarkersList from './components/MarkersList/MarkersList.js';

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [markers, setMarkers] = useState([]);

  useEffect (() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  // Start/Pause
  const handleStartPause = () => {
    setRunning(!running);
  }

  // Reset
  const handleReset = () => {
    setTime(0);
    setRunning(false);
    setMarkers([]);
  }

  // Display
  const displayTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (60 * 1000));
    const remainingSeconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
    const remainingMilliseconds = milliseconds % 1000;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}.${String(remainingMilliseconds).padStart(3, '0')}`;
  }

  // Add a marker of the current time
  const addMarker = () => {
    setMarkers([...markers, time]);
  }

  // Remove a marker
  const removeMarker = (ind) => {
    setMarkers((prevMarkers) => {
      const newMarkers = [...prevMarkers];
      newMarkers.splice(ind, 1);
      return newMarkers;
    });
  }

  return (
    <div className="App">
      <h1>Chronometer</h1>
      <ThemeSwitch />
      <Display 
        displayTime={displayTime} 
        time={time} 
      />
      <>
        <StartPauseButton 
          handleStartPause={handleStartPause}
          running={running}
        />
        <ResetButton 
          handleReset={handleReset}
        />
        <MarkerButton 
          addMarker={addMarker}
        />
      </>
      <MarkersList 
        markers={markers}
        displayTime={displayTime}
        removeMarker={removeMarker}
      />
    </div>
  );
}

export default App;
