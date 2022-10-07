import React from 'react';
import './MovieRow.css';

const MovieRow = ({title, items}) => {
    return (
        <div className='movie-row'>
            <h2>{title}</h2>
            <div className="movie-row__list-area">
                <div className="movie-row__list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movie-row__item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieRow;