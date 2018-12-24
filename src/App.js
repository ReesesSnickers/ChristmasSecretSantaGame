import React, { Component } from 'react';
import MainGamePage from '../src/components/mainGameField/mainGamePage/MainGamePage';
import PlayerCreationPage from '../src/components/playerCreatorPage/mainPage/PlayerCreationPage';
import Sound from 'react-sound';

import AudioFile from '../src/util/audio/x_mas complex.x1.mp3'

import {
  Consumer as MainProvider
} from '../src/util/context/identity/context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <MainProvider>
          {(context) => (
            <React.Fragment>
              <Sound
                url={AudioFile}
                playStatus={Sound.status.PLAYING}
                autoLoad={true}
                loop={true}
              />   
                         
              <div style={{display: context.state.playerCreationPageDisplay}}>
                <PlayerCreationPage />
              </div>
              <div style={{display: context.state.mainGamePageDisplay}}>
                <MainGamePage />
              </div>
            </React.Fragment>
          )}
        </MainProvider>
      </div>
    );
  }
}

export default App;
