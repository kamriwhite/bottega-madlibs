import React, { Component } from 'react';

class Content extends Component {
    render() {
        
        const data = this.props.data;
        this.props.data.map((data,index) => {
            console.log(index);
        })
        //<span>{data.inexOf(data.color)</span>

        return (
            <p>
                Ladies and gentlmen, this is <b>{data.color}</b> Barber, your sportscaster, 
                bringing you the last ining in the game between the Cleveland <b>{data.pluralNoun}</b> 
                and the <b>{data.adjectiveOne}</b> Yankees.
                <b>{data.celebOne}</b> is pitching for the Yankees. Here's the pitch! it's a low 
                <b>{data.adjectivetwo}</b> abll that just cuts the inside of the <b>{data.nounOne}</b> 
                for a strike. that makes the count <b>{data.numberOne}</b> strikes and <b>{data.numberTwo}</b> 
                balls.
                Now here's the next pitch. The batter swings and connects. It's a long, high 
                <b>{data.nounTwo}</b> out to <b>{data.adjectiveThree}</b> field. But <b>{data.celebTwo}</b> 
                is coming up fast and has it for the seconds out.
                The next batter up is <b>{data.celebThree}</b>, the cleveland <b>{data.adjectiveFour}</b>-stop. 
                Here's the pitch... and it's hit... a short ground ball to third <b>{data.nounThree}</b>.
                <b>{data.celebFour}</b> scoops it up  and throws it to first base for an out, 
                and the game is over.
                And the Yankees move into second place in the <b>{data.adjectiveFive}</b> League!
            </p>
        )
    }
}

export default Content;