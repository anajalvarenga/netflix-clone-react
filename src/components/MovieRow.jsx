import React, { useState } from "react";
import "./MovieRow.css";
import { NavigateBefore } from "@material-ui/icons";
import { NavigateNext } from "@material-ui/icons";

const MovieRow = ({ title, items }) => {
    const listWidth = items.results.length * 150;

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let newScrollX = scrollX + Math.round(window.innerWidth / 4);
        if(newScrollX > 0) {
            newScrollX = 0;
        }
        setScrollX(newScrollX);
    };
    const handleRightArrow = () => {
        let newScrollX = scrollX - Math.round(window.innerWidth / 4);
        if((window.innerWidth - listWidth) > newScrollX) {
            newScrollX = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(newScrollX);
    };

    return (
        <div className="movie-row">
            <h2>{title}</h2>
            <div className="movie-row__left" onClick={handleLeftArrow}>
                <NavigateBefore style={{ fontSize: 50 }} />
            </div>
            <div className="movie-row__right" onClick={handleRightArrow}>
                <NavigateNext style={{ fontSize: 50 }} />
            </div>
            <div className="movie-row__list-area">
                <div
                    className="movie-row__list"
                    style={{ 
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}
                >
                    {items.results.length > 0 &&
                        items.results.map((item, key) => (
                            <div className="movie-row__item" key={key}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                    alt={item.original_title}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default MovieRow;
