import React, {Component} from 'react';
import './styles.css'

class Achievements extends Component {
    render() {
        const {name, medals, cups, goals, styleData} = this.props
        return (
            <div className={styleData}>
                <hr/>
                <h2>Основні досягнення клубу {name}:</h2>
                <p>● {medals} медалей</p>
                <p>● {cups} кубків</p>
                <p>● {goals} забитих голів</p>
            </div>
        );
    }
}

export default Achievements;