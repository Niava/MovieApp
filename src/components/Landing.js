import React, { Component } from 'react';
import Title from './Title';
import FetchPrograms from '../actions/index';

class Landing extends Component {
    
    render() {
        return (
            <main>
                <Title pagetitle="Title" />
                <div className="wrapper -padded">
                    <FetchPrograms category="movies" length="15" />
                </div>
            </main >
        );
    }
}

export default Landing;