import React from "react";
import './moviedetail.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            isLoaded: false,
            movie:null,
        };
    }
    componentDidMount() {
        this.getMovieDetails()
    }

    async getMovieDetails() {
        var poster_path;
        var movieDataLink="https://api.themoviedb.org/3/movie/"+this.state.id.toString()+"?api_key=74c8f4090bcdc0cee9cda4752bd58557";
        var res=await fetch(movieDataLink);
            var data = await res.json();
            this.setState({
             movie:data,
         })
    }
    render() {
        const movie=this.state.movie;
        if(movie!==null){
            return (
                <div className="container" >
                    <div className="box">
                        <img class="background-image" src={'https://image.tmdb.org/t/p/original/'+
                        movie.backdrop_path}/>
                    </div>
                    <div className="stack-top">
                        <div className="row">
                            <div className="poster">
                                <img class="poster-image" src={'https://image.tmdb.org/t/p/original/'+
                                movie.poster_path}/>
                            </div>
                            <div className="column">
                                <div className="content">
                                    <h1 className="title">{movie.original_title}</h1>
                                    <p className="description">{movie.overview}</p>
                                </div>
                                <div className="row">
                                    <button class="button2">{movie.original_language}</button>
                                    <button class="button2">{movie.vote_average}/10</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (<div className="loading" >
               <CircularProgress size={100}/>
            </div>)
        }
    }
}
export default MovieDetail