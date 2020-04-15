import React from "react";
import './search.css';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import MovieCard from "../MovieCard";
 const api = "&api_key=74c8f4090bcdc0cee9cda4752bd58557";

class Search extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            searchString : '',
            searchMade:false,
        }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event){
        this.setState({searchString : event.target.value})
    }


    handleSubmit(){
        console.log('Your input value is: ' + this.state.searchString)
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.searchString}${api}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                this.setState({
                    isLoaded: true,
                    items: data.results,
                    searchMade:true
                });

            });
    }
    render(){
        if(this.state.items.length===0 && this.state.searchMade){
            return(
                <div>
                    <div className="searchBar">
                        <input type="text" onChange={this.updateInput}></input>
                        <input type="Submit" onClick={this.handleSubmit} className="button"></input>
                    </div>
                    <div class="Nothing">
                        Nothing Found. Please change your search query
                    </div>
                </div>

            );
        }
        else{
            return (
                <div>
                    <div class="searchBar">
                        <input type="text" onChange={this.updateInput}></input>
                        <input type="Submit" onClick={this.handleSubmit} className="button"></input>
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

}
export default Search