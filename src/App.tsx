import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';


function App() {
    useEffect(() => {
    document.title = "Home - Red Antler";
  }, []);
  return (
      <div>
          <div>
              <Header/>
          </div>

          <video className="absolute top-[-10%] scale-x-150 scale-y-150 z-[-10]" autoPlay loop muted>
              <source
                  src="https://videos.ctfassets.net/x5brbn1xcmsf/9I41SSztDrrCMQrdMhzq2/19b7dae2cc6033830a39657cb486c11e/20214-racom-v7.mp4"
                  type="video/mp4"/>
              Your browser does not support the video tag.
          </video>

          <div className="h-[90vh] text-center flex items-center justify-center">
              <div className="w-2/4">
                  <h2 className="text-8xl font-bold tracking-tight font-oswald">
                      WE TURN BRAND NEW IDEAS INTO BRANDS YOU CAN'T LIVE
                  </h2>
              </div>
          </div>

      </div>

  );
}


export default App;


