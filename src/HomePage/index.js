import React from "react";

import MovieGrid from "../MovieGrid";
import "./styles.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";

// Correctness - 55/80
// - Routes and functionality working as expected but deducting marks for fit and finish
// - You are not re using HomePage Component which you should be doing
// - Details page is not opening, getting failed to fetch error
//
// Code Quality - 15/20
// - Component hierarchy is correct
// - remove unused variables and check console for error messages
class HomePage extends React.Component {

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
            return <div className="loading" ><CircularProgress size={100}/> </div>;
        } else {
            return (
                <div>
                    <div class="searchBar">
                        <Link to="/Search" className="button">Search</Link>
                    </div>
                    <MovieGrid items={this.state.items}/>
                </div>
            );
        }
    }
}

export default HomePage