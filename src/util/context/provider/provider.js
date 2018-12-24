import React, { Component } from 'react';

import {
    Provider as MainProvider
} from '../identity/context';

export default class ContextProvider extends Component {
    state = {
        inputFieldValue: "",
        initialColorChoice: {},
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
        playerArrayCheck: "",
        
    }

    render() {

        return (
            <MainProvider value={{
                state: this.state,
                handlePlay: () => {
                    let playerArray = []
                    Object.keys(this.state.players).forEach(key => playerArray.push(key));
                    console.log('hanleplay', playerArray)
                    this.setState({playerArrayList: playerArray})
                    if (playerArray.length >= 3) {
                        if (this.state.mainGamePageDisplay === "") {
                            this.setState({ mainGamePageDisplay: "none"})
                            this.setState({ playerCreationPageDisplay: ""})
                        } else {
                            this.setState({ mainGamePageDisplay: ""})
                            this.setState({ playerCreationPageDisplay: "none"})
                        }
                        this.setState((prevState) => ({players: {
                            ...prevState.players, i: {
                                name: this.state.players[this.state.playerArrayCheck].name, 
                                giftColor: this.state.players[this.state.playerArrayCheck].giftColor,
                                myTurn: "sleigh",
                                steal: 2,
                                pass: 2,
                                watchingPackage: true
                            }
                        }}))
                        this.setState({ playerArrayCheck: "i"})
                    } else {
                        alert('players are not ready! we need at least 3 elfs to start this Christmas Mission!')
                    }
                },
                handleEnlist: (elfName, giftColor) => {
                    if(this.state.inputFieldValue.length !== 0){
                        if(this.state.initialColorChoice.length !== 0){
                            const players = this.state.players
                            const playerArray = []
                            playerArray.push(players)
                            const checkList = playerArray.some(player => player.name === elfName);
                            if(!checkList){
                                let currentPlayers = this.state.players;
                                currentPlayers[this.state.playerArrayCheck + "i"] = {
                                    name: elfName, 
                                    giftColor: giftColor,
                                    myTurn: "no-sleigh",
                                    steal: 2,
                                    pass: 2,
                                    watchingPackage: true
                                };
                                let newColorList = this.state.colors.filter(color => color.colorHex !== giftColor);
                                this.setState({
                                    players: currentPlayers,
                                    inputFieldValue: "",
                                    colors: newColorList,
                                    numberOfPlayers: this.state.numberOfPlayers + 1,
                                    playerArrayCheck: this.state.playerArrayCheck + "i"
                                })
                            } else {
                                alert('Sorry, ' + elfName + ' already signed up. Do you go by anything else?')
                            }
                        } else {
                            alert('Do you not know what color the package is?')
                        }
                    } else {
                        alert("How do I know who to thank if I don't know your name?")
                    }
                },
                handleNameChange: (event) => {
                    this.setState({inputFieldValue: event.target.value});
                },
                handleColorChoice: (event)  => {
                    this.setState({initialColorChoice: event.target.value})
                },
                handleTurn: () => {

                    let key = "i"
                    this.setState((prevState) => ({players: {
                        ...prevState.players, [key]: {
                            name: this.state.players.i.name, 
                            giftColor: this.state.players.i.giftColor,
                            myTurn: "sleigh",
                            steal: 2,
                            pass: 2,
                            watchingPackage: true
                        }
                    }}))



                    // console.log('handleturn', this.state.playerArrayList)
                    // let playerNumber = 0
                    // let currentPlayer = this.state.playerArrayList[playerNumber]
                    // let list = this.state.players
                    // console.log('handleturn current', currentPlayer)
                    // console.log(list + "." + currentPlayer)

                    // const players = this.state.players
                    // const playerArray = []
                    // playerArray.push(players)
                    // console.log('array', playerArray)
                    // const checkList = playerArray.some(player => player.myTurn === "sleigh");
                    // console.log('list', checkList)




                    // console.log(this.state.players.[].name)
                    // this.setState(prevState => ({
                    //     players: {
                    //     ...prevState.players, [this.state.playerArrayCheck]: {
                    //         name: this.state.players.i.name, 
                    //         giftColor: this.state.players.i.giftColor,
                    //         myTurn: "no-sleigh",
                    //         steal: 2,
                    //         pass: 2,
                    //         watchingPackage: true
                    //     }
                    // }}))
                }   
            }}>
                {this.props.children}
            </MainProvider>
        )
    }
}