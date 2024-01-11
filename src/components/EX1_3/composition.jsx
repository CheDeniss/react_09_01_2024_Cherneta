import React, {Component} from 'react';


class Composition extends Component {
    render() {
        const {players, club, styleData} = this.props

        return (
            <div className={styleData}>
                <hr/>
                <h2>Гравці команди {club.name}:</h2>
                <ul>
                    {
                        players.map ((player, index) => (
                            <li key = {index}>{player.name} - {player.position}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Composition;