import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faSleigh } from '@fortawesome/free-solid-svg-icons'

library.add(faGift, faSleigh)


export default class PlayerTableCard extends Component {
    render() {
        return (
            <div style={{marginLeft: "20px", marginRight: "20px"}}>
                <Card style={{marginBottom: "5px"}}>
                    <Grid container style={{paddingBottom: "5px", paddingTop: "5px", paddingLeft: "38px"}}>
                        <Grid item>
                        <Grid item>
                            <FontAwesomeIcon icon="gift" />
                        </Grid>
                        </Grid>
                        <Grid item>
                            <CardContent style={{padding: "0px"}}>
                                <Grid container>
                                    <Grid item style={{paddingLeft: "80px"}}>
                                        <p style={{margin: "0px", padding: "0px"}}>Bobbylee Ingalls</p>
                                    </Grid>
                                    <Grid item style={{paddingLeft: "510px"}}>
                                        <Button style={{padding: "0px", minHeight: "0px"}}>Steal</Button>
                                    </Grid>
                                    <Grid item style={{paddingLeft: "20px", paddingRight: "45px"}}>
                                        <Button style={{padding: "0px", minHeight: "0px"}}>Pass</Button>
                                    </Grid>
                                    <Grid item>
                                        <FontAwesomeIcon icon="sleigh"/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}