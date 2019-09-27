import React from 'react';
import { exhibitionsInfo } from '../../constants/exhibitions/exhibitionsDatabase';


class Exhibitions extends React.Component {
    render() {
        let exhibitions = exhibitionsInfo.map(item => {
            return (
                <div className="exhibition-card" key={item.id}>
                    <div className="exhibition-image">
                        <img src={item.src} />
                    </div>
                    <div className="exhibition-info">
                        <ul>
                            <li className="year">{item.year}</li>
                            <li className="title"><a href={item.url} target="new">{item.title}</a></li>
                            <li className="venue-and-location">{item.venue} / {item.location}</li>
                            <li className="description">{item.desc}</li>
                            <li className="date">{item.date}</li>
                        </ul>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="container">
                    <h1>Exhibitions</h1>
                </div>
                <div className="exhibit-list">
                    { exhibitions }
                </div>
            </div>
        );
    }
}

export default Exhibitions;