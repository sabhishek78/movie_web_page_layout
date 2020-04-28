import React from "react";

import MovieGrid from "../MovieGrid";
import "./styles.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            query:this.props.match != null ? this.props.match.params.query : null,
        };
    }

    componentDidMount() {
        let url;
        if (this.state.query == null)
            url = `https://api.themoviedb.org/3/discover/movie?api_key=74c8f4090bcdc0cee9cda4752bd58557&sort_by=revenue.desc`;
        else {
            url = `https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=74c8f4090bcdc0cee9cda4752bd58557`;
        }
        fetch(url)
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