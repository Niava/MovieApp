import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="site__footer">
                <div className="wrapper -padded">
                    <nav className ="site__links">
                        <ul className ="list">
                            <li><a className ="link -light -hover-blue" href="/">Home</a></li>
                            <li><a className ="link -light -hover-blue" href="/terms">Terms and Conditions</a></li>
                            <li><a className ="link -light -hover-blue" href="/privacy-policy">Privacy Policy</a></li>
                            <li><a className ="link -light -hover-blue" href="/collection-statement">Collection Statement</a></li>
                            <li><a className ="link -light -hover-blue" href="/">Help</a></li>
                            <li><a className ="link -light -hover-blue" href="/">Manage Account</a></li>
                        </ul>
                    </nav>

                    <div className ="site__external-links">
                        <ul className ="list -inline social -text-center">
                            <li><a className ="icon--social -facebook" href="https://www.facebook.com/StanAustralia" target="_blank" rel="noopener noreferrer">Stan on Facebook</a></li>
                            <li><a className ="icon--social -twitter" href="https://twitter.com/StanAustralia" target="_blank" rel="noopener noreferrer">Stan on Twitter</a></li>
                            <li><a className ="icon--social -instagram" href="https://instagram.com/stanaustralia/" target="_blank" rel="noopener noreferrer">Stan on Instagram</a></li>
                        </ul>
                        <ul className ="list -inline store -text-center">
                            <li><a className ="icon--store -ios" href="https://itunes.apple.com/au/app/stan./id948095331?ls=1&amp;mt=8" target="_blank" rel="noopener noreferrer">Stan on iOS</a></li>
                            <li><a className ="icon--store -android" href="https://play.google.com/store/apps/details?id=au.com.stan.and" target="_blank" rel="noopener noreferrer">Stan on Android</a></li>
                            <li><a className ="icon--store -microsoft" href="https://www.microsoft.com/en-au/p/stan/" target="_blank" rel="noopener noreferrer">Stan on Microsoft</a></li>
                        </ul>
                    </div>

                    <p className ="copyright -text-center">Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>  

                </div>
            </footer>
        );
    }
}

export default Footer;