import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="site__footer">
                <div className="wrapper -padded">
                    <nav class="site__links">
                        <ul class="list">
                            <li><a class="link -light -hover-blue" href="/">Home</a></li>
                            <li><a class="link -light -hover-blue" href="/terms">Terms and Conditions</a></li>
                            <li><a class="link -light -hover-blue" href="/privacy-policy">Privacy Policy</a></li>
                            <li><a class="link -light -hover-blue" href="/collection-statement">Collection Statement</a></li>
                            <li><a class="link -light -hover-blue" href="/">Help</a></li>
                            <li><a class="link -light -hover-blue" href="/">Manage Account</a></li>
                        </ul>
                    </nav>

                    <div class="site__external-links">
                        <ul class="list -inline social -text-center">
                            <li><a class="icon--social -facebook" href="https://www.facebook.com/StanAustralia" target="_blank">Stan on Facebook</a></li>
                            <li><a class="icon--social -twitter" href="https://twitter.com/StanAustralia" target="_blank">Stan on Twitter</a></li>
                            <li><a class="icon--social -instagram" href="https://instagram.com/stanaustralia/" target="_blank">Stan on Instagram</a></li>
                        </ul>
                        <ul class="list -inline store -text-center">
                            <li><a class="icon--store -ios" href="https://itunes.apple.com/au/app/stan./id948095331?ls=1&amp;mt=8" target="_blank">Stan on iOS</a></li>
                            <li><a class="icon--store -android" href="https://play.google.com/store/apps/details?id=au.com.stan.and" target="_blank">Stan on Android</a></li>
                            <li><a class="icon--store -microsoft" href="https://www.microsoft.com/en-au/p/stan/" target="_blank">Stan on Microsoft</a></li>
                        </ul>
                    </div>

                    <p class="copyright -text-center">Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>  

                </div>
            </footer>
        );
    }
}

export default Footer;