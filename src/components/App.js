import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';

import Footer from './Footer';
// src={logo}
const Series = () => <h2>Dashboard</h2>
const Movies = () => <h2>SurveyNew</h2>

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
        <BrowserRouter>
          <div className="site -hero page">
            <Header />
            <div className="site__content">
              <Route exact path="/" component={Landing} />
              <Route exact path="/series" component={Series} />
              <Route exact path="/movies" component={Movies} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
};

export default App;
