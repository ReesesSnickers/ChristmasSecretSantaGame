import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

import '../mainPage/PlayerCreationsPage.css';

import {
    Consumer as MainProvider
} from '../../../util/context/identity/context';



export default class Form extends Component {
    render(props) {
        return (
            <MainProvider>
                {(context) => (
                    <React.Fragment>
                        <form ref={(elfname) => this.myFormRef = elfname}>
                            <label>
                                <p style={{fontFamily:"Cookie", color: "#A0522D", fontSize: "40px", margin: "0px"}}>What's your name little elf?</p>
                                <input onChange={context.handleNameChange} style={{width: "200px", height: "25px"}} />
                            </label>
                            <label>
                                <p style={{fontFamily:"Cookie", color: "#A0522D", fontSize: "40px", margin: "0px"}}>What color was the package you brought from the sleigh?</p>
                                <Select native onChange={context.handleColorChoice} style={{position: "absolute", left: "30%"}}>
                                    {context.state.colors.map(color => <option key={color.color} value={color.colorHex}>{color.color}</option>)}
                                </Select>
                            </label>
                        </form>
                        <div style={{paddingLeft: "32.2vw"}}>
                            <Button variant="contained" style ={{fontFamily:"Cookie", backgroundColor: "#800000", height: "35px", width: "125px", color: "#F4A460", fontSize: "15px", fontWeight: "bold"}} onClick={() => {context.handleEnlist(context.state.inputFieldValue, context.state.initialColorChoice); this.myFormRef.reset()}}>Enlist</Button>
                        </div>
                    </React.Fragment>
                )}
            </MainProvider>
        );
    }
}