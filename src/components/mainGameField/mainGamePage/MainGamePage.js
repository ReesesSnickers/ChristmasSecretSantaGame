import React, { Component } from 'react';

import PlayerCard from '../player/Player';
import PlayerTableCard from '../../subGameField/tablePlayer/TablePlayer';
import Logo from '../logo/Logo';

import Grid from '@material-ui/core/Grid';

export default class MainGamePage extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor: "green", height: "67vh"}}>
                    <Logo />
                    <PlayerCard />
                </div>
                <div style={{backgroundColor: "red", height: "33vh"}}>
                <Grid container style={{color: "white", paddingBottom: "5px"}}>
                    <Grid item>
                        <p style={{margin: "0px", paddingTop: "5px", paddingLeft: "20px", paddingBottom: "5px"}}>Current Gift</p>
                    </Grid>
                    <Grid item>
                        <p style={{margin: "0px", paddingTop: "5px", paddingLeft: "75px", paddingBottom: "5px"}}>Name</p>
                    </Grid>
                    <Grid item>
                        <p style={{margin: "0px", paddingTop: "5px", paddingLeft: "565px", paddingBottom: "5px"}}>Available Move</p>
                    </Grid>
                </Grid>
                <PlayerTableCard />
                <PlayerTableCard />
                <PlayerTableCard />
                <PlayerTableCard />
                <PlayerTableCard />
                <PlayerTableCard />
                </div>          
            </div>
        );
    }
}