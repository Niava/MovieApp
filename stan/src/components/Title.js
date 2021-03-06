import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="page__title gradient--grey">
                <div className="wrapper -padded">
                    <div className="title">
                        Popular {this.props.pagetitle}
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;