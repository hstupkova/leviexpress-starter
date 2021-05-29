import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';
import JourneyDetail from '../JourneyDetail';
import SeatPicker from '../SeatPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  
  return (
    <main>
      <JourneyPicker onJourneyChange={setJourney} />
      {
        journey !== null ? <JourneyDetail journey={journey} /> : <div></div>
      }
      <SeatPicker />
      
    </main>
  );
};