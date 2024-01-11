import React, {Component} from 'react';
import './styles.css'

class MagicBall extends Component {

    state = {pediction: null}

    answers = [
        'Так, безумовно',
        'Відповідь неясна, спробуйте ще раз',
        'Не розраховуйте на це',
        'Можливо',
        'Абсолютно!',
        'Мої джерела кажуть ні',
        'Виглядає добре',
        'Не розраховуйте на це',
        'Мої джерела кажуть ні',
        'Так',
        'Виглядає добре',
        'Не можу передбачити зараз',
        'Найкраще не розказувати вам зараз',
        'Дуже сумнівно',
        'Так - точно',
        'Ви можете на це покластися',
        'Мої джерела кажуть ні',
        'Перспективи не дуже добрі',
        'Це точно',
        'Знаки вказують на "так"'
    ];

    getPred = () => {
        this.setState((oldPred) => {
            let newPred
            do{
                newPred = Math.floor(Math.random() * this.answers.length)
            }while(oldPred.pediction === this.answers[newPred])
                console.log(newPred)
            return{
                pediction : this.answers[newPred]
            }
        })
    }

    render() {
        return (
                <div className="magic">
                    <p>{this.state.pediction}</p>
                    <button onClick={this.getPred}>Нове передбачення</button>
                </div>
        );
    }
}

export default MagicBall;