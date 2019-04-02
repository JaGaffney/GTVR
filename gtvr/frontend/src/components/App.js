import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// Created Imports
//layout
import Header from './layout/Header'
import Footer from './layout/Footer'

// pages
import Home from './home/Home'
import About from './common/About'
import Case from './common/Case'
import Contact from './common/Contact'
import LessonDashboard from './lessons/LessonDashboard'

// Redux store
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
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
                <Route exact path="/about" component={About} />
                <Route exact path="/lessons" component={LessonDashboard} />
                <Route exact path="/case" component={Case} />
                <Route exact path="/contact" component={Contact} />
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
