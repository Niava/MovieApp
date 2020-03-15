import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Movies from './Movies';
import Series from './Series';
import Footer from './Footer';

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
