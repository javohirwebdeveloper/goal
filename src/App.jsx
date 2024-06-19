import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Mp1 from '../public/audio/11067312.mp3';
import Mp2 from '../public/audio/9155952.mp3';
const App = () => {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Push-ups', sets: 4, reps: 25, completed: false },
    { id: 2, name: 'Squats', sets: 4, reps: 20, completed: false },
    { id: 3, name: 'Plank', sets: 3, duration: '1 daqiqa', completed: false },
    { id: 4, name: 'Pull-ups', sets: 3, reps: 'max', completed: false }
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {workouts.map(workout => (
          <div key={workout.id} className="bg-white p-4 rounded shadow-md transition duration-500 ease-in-out transform ">
            <h2 className="text-xl font-semibold">{workout.name}</h2>
            <p>Sets: {workout.sets}</p>
            <p>Reps/Davomiyligi: {workout.reps || workout.duration}</p>
              <button 
                onClick={() => setWorkouts(workouts.map(w => 
                  w.id === workout.id ? { ...w, completed: true } : w
                ))}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2 transition duration-300 ease-in-out"
              >
                Yakunlandi
              </button>
            {workout.completed && <span className="ml-2 text-blue-700">✅</span>}
          </div>
        ))}
      </div>
      <AudioPlayer
      className='mt-4'
      src={Mp1} 
      onPlay={e => console.log("onPlay")}
    />
    <AudioPlayer
      className='mt-4'
           src={Mp2} 
      onPlay={e => console.log("onPlay")}
    />
    </div>
  );
};

export default App;
