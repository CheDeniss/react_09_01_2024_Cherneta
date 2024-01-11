import React, {Component, createContext} from 'react';
// import About from "./about.jsx"; - // В окремому файлі контекст не запрацював і викликав помилку...
import Achievements from "./achievements.jsx";
import Composition from "./composition.jsx";

const FootballClubContext = createContext(1);



class FootballClub extends React.Component {
    state = {
        style: 0,
        clubIndex: 0,
        clubs: [
            {
                name: 'Манчестер Юнайтед',
                country: 'Англія',
                foundationDate: '1887',
                emblem: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png'
            },
            {
                name: 'Реал Мадрид',
                country: 'Іспанія',
                foundationDate: '1902',
                emblem: 'https://upload.wikimedia.org/wikipedia/uk/9/98/Real_Madrid.png'
            },
            {
                name: 'Барселона',
                country: 'Іспанія',
                foundationDate: '1899',
                emblem: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png'
            },
        ],

        achievm: [
            {
                name: "Манчестер Юнайтед",
                medals: 20,
                cups: 12,
                goals: "111"
            },
            {
                name: "Реал Мадрид",
                medals: 35,
                cups: 8,
                goals: "222"
            },
            {
                name: "Барселона",
                medals: 26,
                cups: 5,
                goals: "333"
            }
        ],

        players: [
            [
                { name: 'Гаррі Магвайр', position: 'Захисник' },
                { name: 'Бруну Фернандеш', position: 'Півзахисник' },
                { name: 'Маркус Рашфорд', position: 'Нападник' },
                { name: 'Поль Погба', position: 'Півзахисник' },
                { name: 'Девід де Хеа', position: 'Воротар' },
                { name: 'Аарон Ван-Бісака', position: 'Захисник' },
                { name: 'Люк Шоу', position: 'Захисник' },
                { name: 'Скотт МакТоміней', position: 'Півзахисник' },
                { name: 'Едінсон Кавані', position: 'Нападник' },
                { name: 'Мейсон Ґрінвуд', position: 'Нападник' },
                { name: 'Віктор Ліндельоф', position: 'Захисник' },
            ],
            [
                { name: 'Серхіо Рамос', position: 'Захисник' },
                { name: 'Лука Модріч', position: 'Півзахисник' },
                { name: 'Карім Бензема', position: 'Нападник' },
                { name: 'Тібо Куртуа', position: 'Воротар' },
                { name: 'Тоні Крос', position: 'Півзахисник' },
                { name: 'Марсело', position: 'Захисник' },
                { name: 'Федеріко Вальверде', position: 'Півзахисник' },
                { name: 'Родріго', position: 'Нападник' },
                { name: 'Ферлан Менді', position: 'Захисник' },
                { name: 'Еден Азар', position: 'Нападник' },
                { name: 'Едер Мілітао', position: 'Захисник' },
            ],
            [
                { name: 'Ліонель Мессі', position: 'Нападник' },
                { name: 'Антуан Грізманн', position: 'Нападник' },
                { name: 'Герард Піке', position: 'Захисник' },
                { name: 'Френкі де Йонг', position: 'Півзахисник' },
                { name: 'Жерар Піке', position: 'Захисник' },
                { name: 'Ансу Фаті', position: 'Нападник' },
                { name: 'Серджі Роберто', position: 'Півзахисник' },
                { name: 'Самюель Умтіті', position: 'Захисник' },
                { name: 'Оскар Мінгеса', position: 'Захисник' },
                { name: 'Мемфіс Депай', position: 'Нападник' },
                { name: 'Серджіо Бускетс', position: 'Півзахисник' },
            ]
        ]
    };

    changeClub = () => {
        this.setState((oldState) => ({
            clubIndex: (oldState.clubIndex + 1) % this.state.clubs.length
        }))
    }

    changeStyle = () => {
        this.setState((oldState) => {
        let newStyle
        do{
            newStyle = Math.floor(Math.random() * 5)
        }while(oldState.style === newStyle)

            return{
                style: newStyle
            }
        })
    }

    render() {
        const styleData = 'fotballclub-' + this.state.style
        return (
            <FootballClubContext.Provider value={this.state}>
                <div className={styleData}>
                    <About/>
                    <Achievements {...this.state.achievm[this.state.clubIndex]} styleData = {'achievements-' + this.state.style}/>
                    <Composition club={this.state.achievm[this.state.clubIndex]} players={this.state.players[this.state.clubIndex]} styleData = {'comp-' + this.state.style} />
                    <button onClick={this.changeClub}>Наступна команда</button>
                    <button onClick={this.changeStyle}>Змінити стиль</button>
                </div>
            </FootballClubContext.Provider>
        );
    }
}

class About extends Component {
    static contextType = FootballClubContext

    render() {
        const {name, country, foundationDate, emblem} = this.context.clubs[this.context.clubIndex]
        const styleData = 'about-' + this.context.style
        return (
            <div className={styleData}>
                <h1>{name}</h1>
                <h2>{country} ● {foundationDate}</h2>
                <img src={emblem} alt={name}/>
            </div>
        );
    }
}

export { FootballClub, FootballClubContext };

