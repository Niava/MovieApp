import React, { Component } from 'react';
import Title from './Title';
import FetchPrograms from '../actions/index';

class Movies extends Component {

    render() {
        return (
            <main>
                <Title pagetitle="Movies" />
                <div className="wrapper -padded">
                    <FetchPrograms category="movie" length="21" />
                </div>
            </main >
        );
    }
}

export default Movies;