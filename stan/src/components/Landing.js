import React, { Component } from 'react';
import Title from './Title';
import FetchPrograms from '../actions/index';

class Landing extends Component {
    
    render() {
        return (
            <main>
                <Title pagetitle="Titles" />
                <div className="wrapper -padded">
                    <div className="programs__wrapper">
                        <ol className="list programs__list programs__list--portrait">
                            <li className="programs__item">
                                <div className="programs__container">
                                    <a href="/series" className="programs__links">
                                        <div className="programs__media">
                                            <span>Series</span>
                                        </div>
                                    </a>
                                    <div className="title">Popular Series</div>
                                </div>
                            </li>
                            <li className="programs__item">
                                <div className="programs__container">
                                    <a href="/movies" className="programs__links">
                                        <div className="programs__media">
                                            <span>Movies</span>
                                        </div>
                                    </a>
                                    <div className="title">Popular Movies</div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </main >
        );
    }
}

export default Landing;