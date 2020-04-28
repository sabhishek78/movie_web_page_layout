import React from "react";
import "./styles.css";

import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
class MovieCard extends React.Component {

    render() {
        var link="/moviedetail/"+this.props.id.toString();
        return (
            <Link to={link}>
                <li>
                    <div className="movie-card">
                        <img className="img" src={this.props.url}/>
                        <div className="overlay">
                            <h1>{this.props.title}</h1>
                            <hr/>
                            <div className="flex-row">
                                <div className="overview">
                                    {this.props.overview}
                                </div>

                                    <div className="rating">{this.props.rating}</div>


                            </div>
                        </div>
                    </div>
                </li>

            </Link>


        );
    }
}

export default MovieCard;