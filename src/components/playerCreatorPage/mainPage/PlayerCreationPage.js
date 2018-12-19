import React, { Component } from 'react';

import Logo from '../../mainGameField/logo/Logo';
import Form from '../form/PlayerForm';
import Peppermint from '../../../util/img/peppermint.gif';

import Button from '@material-ui/core/Button';

export default class PlayerCreationPage extends Component {
  render(props) {
    return (
        <div style={{backgroundColor: "red", height: "100vh"}} onLoad={() =>{console.log(this.props)}}>
            <Logo />
            <div style={{textAlign: "center", paddingTop: "75px"}}>
                <Form handleEnroll={this.props.handleEnroll}/>
                <div>
                    <p style={{color: "green", fontSize: "30px", fontWeight: "bold", webkitTextStrokeWidth: "1px", webkitTextStrokeColor: "black", textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>So.. Who signed up to be Santa's little helpers for this trip?</p>
                    <div style={{backgroundColor: "yellow", marginLeft: "300px", marginRight: "300px", height: "200px", marginBottom: "2.7em"}}>
                        Player List area
                    </div>
                </div>
                <Button variant="contained" style={{backgroundImage: `url(${Peppermint})`, backgroundSize: "cover", height: "60px", width: "200px", color: "green", fontSize: "30px", fontWeight: "bold", webkitTextStrokeWidth: "1px", webkitTextStrokeColor: "black", textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}} onClick={this.props.handlePlay}>Play</Button>
            </div>
        </div>       
    );
  }
}