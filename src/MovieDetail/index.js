import React from "react";
import './styles.css';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
class MovieDetail extends React.Component {
    render() {
        console.log(this.props.match.params.name);
        return (
            <div className="moviedetail">
               <img src="https://image.tmdb.org/t/p/original/kvXLZqY0Ngl1XSw7EaMQO0C1CCj.jpg"/>
            </div>
        );
    }
}
export default MovieDetail