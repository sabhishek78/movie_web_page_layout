import React from "react";
import MovieCard from "../MovieCard";
import "./styles.css";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

// Correctness - 55/80
// - Routes and functionality working as expected but deducting marks for fit and finish
// - You are not re using HomePage Component which you should be doing
// - Details page is not opening, getting failed to fetch error
//
// Code Quality - 15/20
// - Component hierarchy is correct
// - remove unused variables and check console for error messages
class MovieGrid extends React.Component {


    render() {
        return(
            <div className="grid">
                {this.props.items.map((movie) => {
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


export default MovieGrid