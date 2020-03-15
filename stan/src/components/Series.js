import React, { Component } from 'react';
import Title from './Title';
import FetchPrograms from '../actions/index';

class Series extends Component {

    render() {
        return (
            <main>
                <Title pagetitle="Series" />
                <div className="wrapper -padded">
                    <FetchPrograms category="series" length="21" />
                </div>
            </main >
        );
    }
}

export default Series;