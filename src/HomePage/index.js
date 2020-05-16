import React from "react";
import ReactPaginate from 'react-paginate';
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
            pageCount:0,
            offset: 0,
            pageItems:[],
            perPage: 8,
            currentPage: 0
        };
    }

    componentDidMount() {
        let url;
        if (this.state.query == null)
            url = `https://api.themoviedb.org/3/discover/movie?api_key=74c8f4090bcdc0cee9cda4752bd58557&page=1`;
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
                    pageCount: Math.ceil(data.results.length / this.state.perPage),
                    pageItems :data.results.slice(this.state.offset, this.state.offset + this.state.perPage),
                });

            });

    }
    getItemsForPage() {
        this.setState({
            pageCount: Math.ceil(this.state.items.length / this.state.perPage),
            pageItems :this.state.items.slice(this.state.offset, this.state.offset + this.state.perPage),
        })
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getItemsForPage()
        });

    };
    render() {
        if (!this.state.isLoaded) {
            return <div className="fullscreen" ><CircularProgress size={100}/> </div>;
        } else {
            return (
                <div>
                    <div className="searchBar">
                        <Link to="/Search" className="button">Search</Link>
                    </div>
                    <MovieGrid items={this.state.pageItems}/>
                    <div className={"pagenation"}>
                        <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}/>
                    </div>
                </div>
            );
        }
    }
}

export default HomePage