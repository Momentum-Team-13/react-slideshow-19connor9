import React, { useState, useEffect } from 'react';


export default function Slideshow(props) {
    const { films } = props
    const [currentFilm, setCurrentFilm] = useState(films[0])
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0)
    useEffect(() => { setCurrentFilm(films[currentFilmIndex]) },
        [films, currentFilmIndex])

    return (
        <div>
            <div className="movie">
                <div>{currentFilm.title}</div>
                <div>{currentFilm.original_title}</div>
                <div>{currentFilm.release_date}</div>
                <div>{currentFilm.description}</div>
                <img className="image" src={currentFilm.image} alt="movie poster" />

                <div>{currentFilmIndex}</div>

                <button onClick={() => { setCurrentFilmIndex(0) }}
                    disabled={currentFilmIndex === 0}>Start Over</button>
                <button onClick={() => { setCurrentFilmIndex(currentFilmIndex - 1) }}
                    disabled={currentFilmIndex === 0}>Back</button>
                <button onClick={() => { setCurrentFilmIndex(currentFilmIndex + 1) }}
                    disabled={currentFilmIndex === 8}>Next</button>
            </div>
        </div>
    )

}