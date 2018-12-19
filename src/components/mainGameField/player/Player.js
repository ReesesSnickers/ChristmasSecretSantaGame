import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


export default class PlayerCard extends Component {
    render() {
        return (
            <div>
                <Card style={{borderRadius: "50%", width: "150px", height: "150px"}}>
                    <CardMedia>

                    </CardMedia>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        );
    }
}