// В окремому файлі контекст не запрацював і викликав помилку...


import React, {Component} from 'react';
import './styles.css'
import {FootballClub, FootballClubContext} from "./footballClub.jsx";

class About extends Component {
    static contextType = FootballClubContext

    render() {
        const {name, country, foundationDate, emblem} = this.context.clubs[this.context.clubIndex]
        return (
            <div>
                <h1>{name}</h1>
                <h2>{country} ● {foundationDate}</h2>
                <img src={emblem} alt={name}/>
            </div>
        );
    }
}

export default About;