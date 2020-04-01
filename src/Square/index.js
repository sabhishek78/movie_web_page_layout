import React from "react";
import "./styles.css";

class Square extends React.Component{
    render() {
        return (
            <div id="content">
                <img src={this.props.url}/>
                <div id="hoverbar">
                    <h1>{this.props.title}</h1>
                    <hr/>
                    <div class="flex-row">
                        <div class="flex-column">
                              <h2>{this.props.genre}</h2>
                        </div>
                        <button className="button">{this.props.rating}</button>
                    </div>
                </div>
            </div>

        );
    }
}
export default Square;