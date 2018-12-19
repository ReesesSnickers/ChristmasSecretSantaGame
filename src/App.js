import React, { Component } from 'react';
import MainGamePage from '../src/components/mainGameField/mainGamePage/MainGamePage';
import PlayerCreationPage from '../src/components/playerCreatorPage/mainPage/PlayerCreationPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCreationPageDisplay: "",
      mainGamePageDisplay: "none",
      players: {
        name: "",
        giftColor: "",
        focusedPlayer: "",
        steal: 1,
        pass: 2
      },
      
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleEnroll = this.handleEnroll.bind(this);
  }

  handlePlay = () => {
    if (this.state.mainGamePageDisplay === "") {
      this.setState({ mainGamePageDisplay: "none"})
      this.setState({ playerCreationPageDisplay: ""})
    } else {
      this.setState({ mainGamePageDisplay: ""})
      this.setState({ playerCreationPageDisplay: "none"})
    }
  }

  handleEnroll = () => {
    console.log('Enrolled')
  }

  render() {
    return (
      <div>
        <div style={{display: this.state.playerCreationPageDisplay}}>
          <PlayerCreationPage handlePlay={this.handlePlay} handleEnroll={this.handleEnroll}/>
        </div>
        <div style={{display: this.state.mainGamePageDisplay}}>
          <MainGamePage />
        </div>
      </div>
    );
  }
}

export default App;
