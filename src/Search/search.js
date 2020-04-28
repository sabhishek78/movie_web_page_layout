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
            query : '',
            searchMade:false,
            path:'/search'
        }

        this.updateInput = this.updateInput.bind(this);

    }

    updateInput(event){
        this.setState({query : event.target.value, path:'/search'+'/'+event.target.value,})
    }
    render(){
        return(
                <div>
                    <div className="searchBar">
                        <input type="text" onChange={this.updateInput}></input>
                        <Link to={this.state.path}>
                        <button className="button">Search</button>
                        </Link>
                    </div>
                </div>
            );
    }
}
export default Search

