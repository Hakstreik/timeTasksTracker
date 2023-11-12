import React, { useState, useEffect } from 'react';
import './App.css';
import images from './images/images.js';

function App() {
  const loadInitialFigures = () => {
    const savedFigures = localStorage.getItem('figures');
    const parsedFigures = JSON.parse(savedFigures);
      if (savedFigures) {      
          return images.map((image, index) => {
              for(let i = 0; i < parsedFigures.length; i++){
                  if(parsedFigures[i].imageUrl == image){
                      return ({
                          id: index,
                          imageUrl: image,
                          timerRunning: false,
                          elapsedTime: parsedFigures[i].elapsedTime,
                      })
                  }
              }
              return({
                  id: index,
                  imageUrl: image,
                  timerRunning: false,
                  elapsedTime: 0
              })
          })
          
      } else {
          return images.map((image, index) => {
              return ({
                  id: index,
                  imageUrl: image,
                  timerRunning: false,
                  elapsedTime: 0

              })
          });
      }
  };

  const [figures, setFigures] = useState(loadInitialFigures);

  const toggleTimer = (figureId) => {
    setFigures(figures.map(figure => {
      if (figure.id === figureId) {
        return { ...figure, timerRunning: !figure.timerRunning };
      } else {
        return { ...figure, timerRunning: false };
      }
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFigures(prevFigures => prevFigures.map(figure => {
        if (figure.timerRunning) {
          return { ...figure, elapsedTime: figure.elapsedTime + 1 };
        }
        return figure;
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, [figures]);

  useEffect(() => {
    localStorage.setItem('figures', JSON.stringify(figures));
  }, [figures]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      <div className="figures-container">
        {figures.map(figure => (
          <div className={`figure-box ${figure.timerRunning ? 'active' : ''}`} key={figure.id} onClick={() => toggleTimer(figure.id)}>
            <img src={figure.imageUrl} alt={`Figura ${figure.id}`} />
            <span>{formatTime(figure.elapsedTime)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

