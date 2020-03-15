import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="site__header gradient--blue -fixed">
                <div className="wrapper -padded">
                    {/* default to home page in demo site
                    possible improvements: use user login status to determine logo link */}
                    <Link to={'/'} className="left site__logo">
                        DEMO Streaming
                    </Link>
                    {/* default to non-login menu
                    possible improvements: use user login status to determine which menu */}
                    <nav className="right site__nav">
                        <ul className="list -inline">
                            <li className="site__login"><a href="/" className="link -hover-grey">Log in</a></li>
                            <li className="site__cta"><a href="/" className="button -grey">Start your free trial</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;