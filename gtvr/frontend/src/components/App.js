import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import { Router, Route, IndexRoute } from 'react-router'
// import { browserHistory } from 'react-router';

// Created Imports

//layout
import Header from './layout/Header'
import Footer from './layout/Footer'

// pages
import Home from './home/Home'
import Case from './common/Case'
import Contact from './common/Contact'
import SubjectDashboard from './subject/SubjectDashboard'

// Redux store
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {

  componentDidMount() {
    // intitiates the youtube iframe api
    let tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            <div className="area__header">
              <Header />
            </div>

            <div className="area__main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/case" component={Case} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/subjects" component={SubjectDashboard} />
              </Switch>
            </div>

            <div className="area__footer">
              <Footer />
            </div>

          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
