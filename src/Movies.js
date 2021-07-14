import React, { useState, useEffect } from 'react';
const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d0")
            .then((response) => response.json())
            .then((movies) => {
                setMovies(movies)
            })
            .catch((err) => {

            })

    }, [])
    return (
        <div>
            <h1>Movies</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie) => {
                            return <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.rating}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Movies;