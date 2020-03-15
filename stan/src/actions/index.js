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
                    //retrive via category
                    const programByCategory = [];
                    parsedJSON.entries.map(movie => {
                        if (movie.programType === category && movie.releaseYear >= 2010){
                            programByCategory.push(
                                movie
                            );
                        }
                    });
                    // sorting by title
                    programByCategory.sort(function (a, b) {
                        return (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : 0;
                    });
                    this.setState({
                        movies: programByCategory,
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
            return <div className="programs__wrapper status">Oops, something went wrong</div>;
        }
        if (this.state.isLoading) {
            return <div className="programs__wrapper status">Loading...</div>;
        }
        return (
            <div className="programs__wrapper">
                <ol className="list programs__list programs__list--portrait">
                    {
                    movies.map((movie, i) => {
                        return (
                            i < parseInt(this.props.length) ? (
                                <li data-item-index={i} className="programs__item">
                                    <div className="programs__container">
                                        <a href="/" className="programs__links">
                                            <div className="programs__media">
                                                <img className="programs__imgholder" src={movie.images["Poster Art"].url} />
                                            </div> 
                                        </a>
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
