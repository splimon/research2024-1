import localforage from 'localforage';
import { useEffect } from 'react';

const EyeTracking = () => {
  useEffect(() => {
    let latestGazeData: { x: any; y: any; time: string } | null = null;

    // Restore training data when the component mounts
    const loadTrainingData = async () => {
      try {
        const storedData = await localforage.getItem('gazeData');
        if (storedData) {
          console.log('Restored training data:', storedData);
        } else {
          console.log('No training data found');
        }
      } catch (error) {
        console.error('Error loading training data:', error);
      }
    };

    loadTrainingData();

    // Set up WebGazer's gaze listener
    if (typeof window !== 'undefined' && window.webgazer) {
      window.webgazer
        .setGazeListener((data: { x: any; y: any }) => {
          if (data) {
            latestGazeData = {
              x: data.x,
              y: data.y,
              time: new Date().toISOString(),
            };
          }
        })
        .begin();
    }

    type GazeData = {
      x: number;
      y: number;
      time: string;
    };

    // Save the most recent gaze data locally every second
    const intervalId = setInterval(async () => {
      if (latestGazeData) {
        try {
          // Retrieve existing data or start with an empty array
          const storedData = (await localforage.getItem<GazeData[]>('gazeData')) || [];

          // Ensure storedData is an array
          const updatedData = Array.isArray(storedData)
            ? [...storedData, latestGazeData]
            : [latestGazeData];

          // Save the updated data back to localforage
          await localforage.setItem('gazeData', updatedData);

          console.log('Saved data to local storage:', latestGazeData);
          latestGazeData = null;
        } catch (error) {
          console.error('Error saving gaze data:', error);
        }
      }
    }, 1000);

    // Cleanup when the component unmounts
    return () => {
      clearInterval(intervalId);

      if (typeof window !== 'undefined' && window.webgazer && typeof window.webgazer.end === 'function') {
        try {
          window.webgazer.end();
          console.log('WebGazer stopped');
        } catch (error) {
          console.error('Error stopping WebGazer:', error);
        }
      } else {
        console.warn('WebGazer not initialized or already stopped.');
      }
    };
  }, []);

  return <div />;
};

export default EyeTracking;
