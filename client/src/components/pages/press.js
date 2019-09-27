import React from 'react';
import { pressArticles } from '../../constants/press/pressDatabase';

class Press extends React.Component {
    render() {
        let articles = pressArticles.map(item => {
            return (
                <div className="press-card">
                    <ul>
                        <li className="press-date">{item.date}</li>
                        <li className="press-title"><a href={item.url} target="new">{item.title}</a></li>
                        <li className="press-excerpt">{item.excerpt}</li>
                        <li className="press-source">Source: <a href={item.url} target="new">{item.source}</a></li>
                    </ul>
                </div>
            )
        })
        return (
            <div>
                <div className="container">
                    <h1>Press</h1>
                </div>
                <div className="press-container">
                    { articles }
                </div>
            </div>
        );
    }
}

export default Press;