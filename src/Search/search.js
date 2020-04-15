import React from "react";
import './search.css';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import MovieCard from "../MovieCard";
 const api = "&api_key=74c8f4090bcdc0cee9cda4752bd58557";
// const endpoint = `https://api.themoviedb.org/3/search/movie?query=${search}${api}`;
// const poster = "https://image.tmdb.org/t/p/w600/";
class Search extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            username : ''
        }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event){
        this.setState({username : event.target.value})
    }


    handleSubmit(){
        console.log('Your input value is: ' + this.state.username)
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.username}${api}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                this.setState({
                    isLoaded: true,
                    items: data.results,
                });

            });
    }
    render(){
        return (
            <div>
                <div>
                    <input type="text" onChange={this.updateInput}></input>
                    <input type="submit" onClick={this.handleSubmit} ></input>
                </div>
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
            </div>

        );
    }

}
export default Search