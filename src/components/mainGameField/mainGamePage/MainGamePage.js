import React, { Component } from 'react';

import PlayerTableCard from '../../subGameField/tablePlayer/TablePlayer';
import Logo from '../logo/Logo';
import Fireplace from '../../../util/img/fireplace.gif';

import Grid from '@material-ui/core/Grid';

import {
    Consumer as MainProvider
} from '../../../util/context/identity/context';


export default class MainGamePage extends Component {
    render(props) {
        return (
            <div>
                <MainProvider>
                    {(context) => (
                        <React.Fragment>
                            <div style={{backgroundImage: `url(${Fireplace})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "67vh"}}>
                                <Logo />
                            </div>
                            <div style={{backgroundColor: "red"}}>
                                <Grid container style={{color: "white"}}>
                                    <Grid item>
                                        <p style={{margin: "0px", paddingTop: "5px", paddingLeft: "20px", paddingBottom: "5px"}}>Current Gift</p>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: "0px", paddingTop: "5px", paddingLeft: "48px", paddingBottom: "5px"}}>Name</p>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: "0px", paddingTop: "5px", paddingLeft: "175px", paddingBottom: "5px", position: "absolute", right: "548px"}}>Available Move</p>
                                    </Grid>
                                </Grid>

                                <PlayerTableCard players={context.state.players} handleturn={context.handleTurn}/>
                                
                            </div>
                        </React.Fragment>
                    )}
                </MainProvider>         
            </div>
        );
    }
}