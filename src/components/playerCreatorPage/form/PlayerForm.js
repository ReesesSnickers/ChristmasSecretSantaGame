import React, { Component } from 'react';

export default class Form extends Component {
    render(props) {
        return (
            <form>
                <label>
                    <p style={{color: "green", fontSize: "30px", fontWeight: "bold", webkitTextStrokeWidth: "1px", webkitTextStrokeColor: "black", textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>What's your name little elf?</p>
                    <input style={{width: "200px"}} />
                </label>
                <label>
                    <p style={{color: "green", fontSize: "30px", fontWeight: "bold", webkitTextStrokeWidth: "1px", webkitTextStrokeColor: "black", textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>What color was the package you brought from the sleigh?</p>
                    <select style={{height: "40px", width: "75px"}}>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option selected value="green">green</option>
                        <option value="yellow">yellow</option>
                    </select>
                </label>
                <input type="submit" value="Enlist" />
            </form>
        );
    }
}