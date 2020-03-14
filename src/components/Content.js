import React from 'react';
import FetchPrograms from '../actions/index';

export const Program = ({ title, subtitle, paragraphs }) => {
    return (
        <div className="program">
            <h1>title</h1>
            <h4>subtitle</h4>
            <div>
                <FetchPrograms category="series" />
            </div>
        </div>
    );
};


