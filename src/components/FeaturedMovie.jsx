import React from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ item }) => {
    const year = item.first_air_date.slice(0, 4);
    const genres = item.genres.map((genre) => genre.name).join(", ");

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    return (
        <section
            className="featured"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}
        >
            <div className="featured__vertical">
                <div className="featured__horizontal">
                    <div className="featured__name">{item.original_name}</div>
                    <div className="fetured__info">
                        <div className="featured__points">
                            {item.vote_average} pontos
                        </div>
                        <div className="featured__year">{year}</div>
                        <div className="featured__seasons">
                            {item.number_of_seasons} temporada
                            {item.number_of_seasons !== 1 && "s"}
                        </div>
                    </div>
                    <div className="featured__description">{description}</div>
                    <div className="featured__buttons">
                        <a
                            href={`/watch/${item.id}`}
                            className="featured__watch-button"
                        >
                            ▶ Assistir
                        </a>
                        <a
                            href={`/list/add/${item.id}`}
                            className="featured__my-list-button"
                        >
                            + Minha Lista
                        </a>
                    </div>
                    <div className="featured__genres">
                        <strong>Gêneros:</strong> {genres}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMovie;
