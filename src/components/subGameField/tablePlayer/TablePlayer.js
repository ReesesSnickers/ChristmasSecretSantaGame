import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import '../../mainGameField/mainGamePage/MainGamePage.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faSleigh } from '@fortawesome/free-solid-svg-icons'

import {
    Consumer as MainProvider
} from '../../../util/context/identity/context';

library.add(faGift, faSleigh)

function PlayerObject(props) {
    return (
        <MainProvider>
            {(context) => (
                <React.Fragment>
                    <div style={{marginLeft: "20px", marginRight: "20px"}}>
                        <Card style={{marginBottom: "5px"}}>
                            <Grid container style={{paddingBottom: "5px", paddingTop: "5px", paddingLeft: "38px"}}>
                                <Grid item>
                                <Grid item>
                                    <FontAwesomeIcon icon="gift" style={{color: props.giftColor}}/>
                                </Grid>
                                </Grid>
                                <Grid item>
                                    <CardContent style={{padding: "0px"}}>
                                        <Grid container>
                                            <Grid item style={{paddingLeft: "80px"}}>
                                                <p style={{margin: "0px", padding: "0px", maxWidth: "40vw", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>{props.name}</p>
                                            </Grid>
                                            <div style={{display:props.players[props.vkey].sleighDisplay}}>
                                                <Grid item style={{position: "absolute", right: '600px'}}>
                                                    <Button style={{padding: "0px", minHeight: "0px"}} onClick={() => {context.handleTurn("steal")}}>Steal</Button>
                                                </Grid>
                                                <Grid item style={{position: "absolute", right: '530px'}}>
                                                    <Button style={{padding: "0px", minHeight: "0px"}} onClick={() => {context.handleTurn("pass")}}>Pass</Button>
                                                </Grid>
                                                <Grid  onLoad={() => {console.log("HERE",context.players)}} item style={{position: "absolute", right: '40px'}}>
                                                    <FontAwesomeIcon className="sleigh" icon="sleigh"/>
                                                </Grid>
                                            </div>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                </React.Fragment>
            )}
        </MainProvider>  
    );
  }

  export default function PlayerTableCard(props) {
        const players = props.players;
        console.log(players);
        if(Object.keys(props.players).length === 0){
            return <div></div>
        } else {
            return(<div>{Object.keys(players).map(function(key) {
                return<PlayerObject 
                    key={key}
                    vkey = {key}
                    name={props.players[key].name}
                    giftColor={props.players[key].giftColor}
                    turn={props.players[key].myTurn}
                    players={props.players} />
                       
            })}</div>)
        }
        

}