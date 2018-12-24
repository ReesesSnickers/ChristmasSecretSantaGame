import React, { Component } from 'react';

import Logo from '../../mainGameField/logo/Logo';
import Form from '../form/PlayerForm';
import NNList from '../../../util/img/Scroll.png';
import './PlayerCreationsPage.css';

import Button from '@material-ui/core/Button';

import PlayingList from '../playingPlayerList/PlayingList';

import {
    Consumer as MainProvider
} from '../../../util/context/identity/context';

var Snow = require('react-snow-effect');

export default class PlayerCreationPage extends Component {
  render(props) {
    return (
        <MainProvider>
            {(context) => (
                <React.Fragment>
                    <div style={{backgroundColor: "green", height: "100vw"}}>
                    <Snow />
                        <div style={{backgroundImage: `url(${NNList})`, backgroundSize: "800px 700px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                        <Logo />
                        <div style={{ textAlign: "center", paddingTop: "100px", height: "600px"}}>
                            <Form handleEnroll={this.props.handleEnroll}/>
                            <div style={{}}>
                                <p style={{fontFamily:"Cookie", color: "#A0522D", fontSize: "40px", margin: "0px"}}>So.. Who signed up to be Santa's little helpers for this trip?</p>
                                <div style={{ marginLeft: "200px", marginRight: "200px", height: "200px", maxHeight: "200px" }}>
                                    <PlayingList players={context.state.players} />
                                </div>
                            </div>
                            <Button variant="contained" style={{fontFamily:"Cookie", backgroundColor: "#800000", height: "35px", width: "125px", color: "#F4A460", fontSize: "15px", fontWeight: "bold"}} onClick={() => {context.handlePlay()}}>Play</Button>
                        </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </MainProvider>     
    );
  }
}