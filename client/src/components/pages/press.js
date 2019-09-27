import React from 'react';
import { pressArticles } from '../../constants/press/pressDatabase';

class Press extends React.Component {
    render() {
        let articles = pressArticles.map(item => {
            return (
                <div>
                    <li className="press-title"><a href={item.url} target="new">"{item.title}"</a></li>
                    <li className="press-date">{item.date}</li>
                    <li className="press-excerpt">{item.excerpt}</li>
                    <li className="press-source">Source: {item.source}</li>
                </div>
            )
        })
        return (
            <div>
                <div className="container">
                    <h1>Press</h1>
                </div>
                <div className="press-list">
                    <ul>
                        { articles }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Press;