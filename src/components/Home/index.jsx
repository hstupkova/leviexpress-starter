import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  
  return (
    <main>
      <JourneyPicker onJourneyChange={setJourney} />
      {
        journey !== null ? <div>Nalezeno spojení s id {journey.journeyId}</div> : <div></div>
      }
      
    </main>
  );
};