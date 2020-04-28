import React from "react";
import './search.css';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import MovieCard from "../MovieCard";
import MovieGrid from "../MovieGrid";
import CircularProgress from '@material-ui/core/CircularProgress';
 const api = "&api_key=74c8f4090bcdc0cee9cda4752bd58557";

class Search extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            searchString : '',
            searchMade:false,
            path:'/Search'
        }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event){
        this.setState({searchString : event.target.value, path:'/Search'+'/'+event.target.value,})
    }


    handleSubmit(){
        this.setState({
            searchMade:true,
            // path:this.state.path+this.state.searchString,
        });
        console.log('Your input value is: ' + this.state.searchString)
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.searchString}${api}`)
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
        if(this.state.items.length===0 && this.state.isLoaded){
            return(
                <div>
                    <div className="searchBar">
                        <input type="text" onChange={this.updateInput}></input>
                        <Link to={this.state.path}>
                        <input type="Submit" onClick={this.handleSubmit} className="button"></input>
                        </Link>
                    </div>
                    <div class="Nothing">
                        Nothing Found. Please change your search query
                    </div>
                </div>

            );
        }
        else if(this.state.searchMade && !this.state.isLoaded){
            return(
                <div>
                    <div className="searchBar">
                        <input type="text" onChange={this.updateInput}></input>
                        <Link to={this.state.path}>
                            <input type="Submit" onClick={this.handleSubmit} className="button"></input>
                        </Link>
                    </div>
                    <div class="Nothing">
                        <div className="loading"><CircularProgress size={100}/> </div>
                    </div>
                </div>

            );
        }
        else{
            return (
                <div>
                    <div class="searchBar">
                        <input type="text" onChange={this.updateInput}></input>
                        <Link to={this.state.path}>
                            <input type="Submit" onClick={this.handleSubmit} className="button"></input>
                        </Link>
                    </div>
                    <MovieGrid items={this.state.items}/>
                </div>
            );
        }

    }

}
export default Search

