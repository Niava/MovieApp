import React, { Component } from 'react';

class FetchPrograms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: '',
            isLoading: true,
            error: false
        };
        this.fetchMovies = this.fetchMovies.bind(this);
    }

    fetchMovies(category) {
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
            .then(response => {
                return response.json();
            })
            .then(
                parsedJSON => {
                    // sorting by title
                    console.log(parsedJSON.entries);
                    parsedJSON.entries.map(movie => {
                        if(movie.programType === category){
                            return movie;
                        }
                    });
                    parsedJSON.entries.sort(function (a, b) {
                        return (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : 0;
                    });
                    this.setState({
                        movies: parsedJSON.entries,
                        isLoading: false
                    });
                    
                }
            )
            .catch(error => {
                console.log('parsing failed', error);
                this.setState({
                    error: true,
                    isLoading: false
                });
            });
    }

    componentDidMount() {
        this.fetchMovies(this.props.category);
    }

    render() {
        const { movies } = this.state;
        if (this.state.error) {
            return <div className="status">Oops, something went wrong</div>;
        }
        if (this.state.isLoading) {
            return <div className="status">Loading...</div>;
        }
        return (
            <div className="programs__wrapper">
                <ol className="list programs__list programs__list--portrait">
                    {
                    movies.map((movie, i) => {
                        return (
                            i <= parseInt(this.props.length) ? (
                                <li key={i} className="programs__item">
                                    <div className="programs__container">
                                        <img className={movie.programType} src={movie.images["Poster Art"].url} alt={movie.title} />
                                        <div className="title">{movie.title}</div>
                                    </div>
                                </li>
                            ) : ""
                        )
                    })}
                </ol>
               
            </div>
        );
    }

};

export default FetchPrograms;
