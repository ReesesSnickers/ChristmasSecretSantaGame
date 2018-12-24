import React, { Component } from 'react';
import MainGamePage from '../src/components/mainGameField/mainGamePage/MainGamePage';
import PlayerCreationPage from '../src/components/playerCreatorPage/mainPage/PlayerCreationPage';

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
