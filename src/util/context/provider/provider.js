import React, { Component } from 'react';

import {
    Provider as MainProvider
} from '../identity/context';

export default class ContextProvider extends Component {
    state = {
        inputFieldValue: "",
        initialColorChoice: {},//current color choice
        playerCreationPageDisplay: "",
        mainGamePageDisplay: "none",
        players: {},
        colors: [
            {color: "Select"},
            {color: "Raw Umber", colorHex: "#715101"}, {color: "Brown Pod", colorHex: "#45190f"},
            {color: "British Racing Green", colorHex: "#053e28"}, {color: "Medium Violet Red", colorHex: "#c81a9a"},
            {color: "Malachite", colorHex: "#0fe035"}, {color: "Medium Aquamarine", colorHex: "#60f3a4"},
            {color: "Persian Blue", colorHex: "#1641e3"}, {color: "Pompadour", colorHex: "#781851"},
            {color: "Purple Heart", colorHex: "#7530cc"}, {color: "Azalea", colorHex: "#f1c5cc"},
            {color: "Carmine", colorHex: "#a60c32"}, {color: "Myrtle", colorHex: "#125c19"},
            {color: "Light Steel Blue", colorHex: "#afc4e2"}, {color: "Carrot Orange", colorHex: "#f39515"},
            {color: "Violent Violet", colorHex: "#1d0358"}, {color: "Bokara Grey", colorHex: "#1b140b"},
            {color: "Broom", colorHex: "#e9d129"}, {color: "Bright Turquoise", colorHex: "#08eef1"},
            {color: "Spicy Pink", colorHex: "#fb1da8"}, {color: "Waikawa Grey", colorHex: "#6a6281"}
        ],
        numberOfPlayers: 0,
        playerArrayList: "",
        playerArrayCheck: "",//key value for current player
        currentTurn:"i"
    }

    render() {

        return (
            <MainProvider value={{
                state: this.state,
                handlePlay: () => {
                    let playerArray = []

                    //how many players are there?
                    let playerLength = Object.keys(this.state.players).length

                    //who's turn is it?
                    let currentPlayer = this.state.players[this.state.currentTurn];
                    console.log();
                    // Object.keys(this.state.players).forEach(key => playerArray.push(key));
                    // console.log('hanleplay', playerArray)
                    // this.setState({playerArrayList: playerArray})

                    //change the view
                    if (playerLength >= 3) {
                        if (this.state.mainGamePageDisplay === "") {
                            this.setState({ mainGamePageDisplay: "none"})
                            this.setState({ playerCreationPageDisplay: ""})
                        } else {
                            this.setState({ mainGamePageDisplay: ""})
                            this.setState({ playerCreationPageDisplay: "none"})
                        }

                        //updating the players object (who's turn it is)
                        this.setState((prevState) => ({players: {
                            ...prevState.players, 
                           
                            [this.state.currentTurn]: {
                                name: this.state.players[this.state.currentTurn].name, 
                                giftColor: this.state.players[this.state.currentTurn].giftColor,
                                sleighDisplay: "",
                                steal: 2,
                                pass: 2,
                                watchingPackage: true
                            }
                        }}))

                        //updating the turn
                        if(playerLength === this.state.currentTurn.length){
                            //was this the last player in the game? if so, start over
                            this.setState({ playerArrayCheck: "i"})
                        } else {
                            this.setState({ currentTurn: this.state.currentTurn + "i"})
                        }
                       
                    } else {
                        alert('players are not ready! we need at least 3 elfs to start this Christmas Mission!')
                    }
                },
                handleEnlist: (elfName, giftColor) => {
                    // console.log(giftColor, typeof giftColor)
                    
                    //the name inputfield value that's passed
                    let elfInput = this.state.inputFieldValue;
                    
                    
                      //prevent duplicate names
                      let duplicateName = false;
                      let done = Object.keys(this.state.players).length
                      let now = 0;  


                      try{
                            //for each player in the current list of players
                            for (var player in this.state.players) {

                                //count the loop
                                done++

                                //check if the incoming name has been taken or not
                                if (player.name === elfInput) {
                                    duplicateName = true;
                                }

                                if(now == done){
                                    //loop is done, move on
                                    if(duplicateName){
                                        alert("you can't be named that, sorry, change your birth certificate.");                                
                                    } else {
                                        //you're gucci, render
                                        elfInput = ""
                                    }
                                }
                            }
                      }catch(err){
                          console.log(err)
                      }finally{
                        //if the string wasn't empty...
                        if(elfInput.length !== 0){

                            //...and a color was passed...
                            if(Object.keys(giftColor).length !== 0){

                                //go ahead and set the user info...
                                const players = this.state.players
                                // const playerArray = []
                                // playerArray.push(players)
                                // const checkList = playerArray.some(player => player.name === elfName);
                              
                                    let currentPlayers = this.state.players;

                                    currentPlayers[this.state.playerArrayCheck + "i"] = {
                                        name: elfName, 
                                        giftColor: giftColor,
                                        sleighDisplay: "none",
                                        steal: 2,
                                        pass: 2,
                                        watchingPackage: true
                                    };
                                    let newColorList = this.state.colors.filter(color => color.colorHex !== giftColor);
                                    this.setState({
                                        initialColorChoice : {},
                                        players: currentPlayers,
                                        inputFieldValue: "",
                                        colors: newColorList,
                                        numberOfPlayers: this.state.numberOfPlayers + 1,
                                        playerArrayCheck: this.state.playerArrayCheck + "i"
                                    })
                                
                            } else {
                                alert('Do you not know what color the package is?')
                            }
                        } else {
                            alert("How do I know who to thank if I don't know your name?")
                        }
                      }

                },
                handleNameChange: (event) => {
                    this.setState({inputFieldValue: event.target.value});
                },
                handleColorChoice: (event)  => {
                    this.setState({initialColorChoice: event.target.value})
                },
                handleTurn: (arg) => {

                    //how many players are there?
                    let playerLength = Object.keys(this.state.players).length

                    //who's turn is it?
                    const currentPlayer = this.state.players[this.state.currentTurn];

                            //first thing is to determine the action
                    if(arg === "steal"){
                        this.setState((prevState) => ({players: {
                            ...prevState.players, [this.state.currentTurn]: {
                                name: this.state.players[this.state.currentTurn].name, 
                                giftColor: this.state.players[this.state.currentTurn].giftColor,
                                sleighDisplay: "none",
                                steal: this.state.players[this.state.currentTurn].steal--,
                                pass: this.state.players[this.state.currentTurn].pass,
                                watchingPackage: this.state.players[this.state.currentTurn].watchingPackage
                            }
                        }}))
                    }else if(arg === "pass"){
                        console.log()
                        //update this state object
                        this.setState((prevState) => ({players: {
                            ...prevState.players, [this.state.currentTurn]: {
                                name: this.state.players[this.state.currentTurn].name, 
                                giftColor: this.state.players[this.state.currentTurn].giftColor,
                                sleighDisplay: "none",
                                steal: this.state.players[this.state.currentTurn].steal,
                                pass: this.state.players[this.state.currentTurn].pass--,
                                watchingPackage: this.state.players[this.state.currentTurn].watchingPackage
                            }
                        }}))
                    }

                    //updating the turn
                    if(playerLength === this.state.currentTurn.length){
                        //was this the last player in the game? if so, start over
                        this.setState({ currentTurn: "i"})
                    } else {
                        this.setState({ currentTurn: this.state.currentTurn + "i"}, function(){
                            this.setState((prevState) => ({players: {
                                ...prevState.players, [this.state.currentTurn]: {
                                    name: this.state.players[this.state.currentTurn].name, 
                                    giftColor: this.state.players[this.state.currentTurn].giftColor,
                                    sleighDisplay: "",
                                    steal: this.state.players[this.state.currentTurn].steal,
                                    pass: this.state.players[this.state.currentTurn].pass,
                                    watchingPackage: this.state.players[this.state.currentTurn].watchingPackage
                                }
                            }}))
                        })
                    }

                }   
            }}>
                {this.props.children}
            </MainProvider>
        )
    }
}