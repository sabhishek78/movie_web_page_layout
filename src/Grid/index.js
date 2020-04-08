import React from "react";
import MovieCard from "../MovieCard";
import "./styles.css";

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=74c8f4090bcdc0cee9cda4752bd58557&sort_by=revenue.desc')
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                this.setState({
                    isLoaded: true,
                    items: data.results,
                });

            });
    }

    render() {
        if (!this.state.isLoaded) {
            return <div>Loading ... </div>;
        } else {
            return (
                <div className="grid">
                    {this.state.items.map((movie, index) => {
                        return <MovieCard title={movie.original_title}
                                          url={"http://image.tmdb.org/t/p/w185" + movie.poster_path}
                                          overview={movie.overview}
                                          rating={movie.vote_average}
                                          id={movie.id}
                        />
                    })}
                </div>
            );
        }

    }
}

export default Grid