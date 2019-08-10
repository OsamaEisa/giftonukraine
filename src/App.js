import React, { Component } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './components/Home'
import About from './components/About'
import Admission from './components/Admission'

import Contact from './components/Contact'
import Universities from './components/Universities'

import LiveInUkraine from './components/LiveInUkraine'
import StudyInUkraine from './components/StudyInUkraine'
import WhyUkraine from './components/WhyUkraine'

import Transfer from './components/Transfer'
import MasterAndPhD from './components/MasterAndPhD'
import Requirements from './components/Requirements'

import VisaAndArrival from './components/VisaAndArrival'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/admission' component={Admission} />

            <Route path='/contact' component={Contact} />
            <Route path='/universities' component={Universities} />
            
            <Route path='/liveinukraine' component={LiveInUkraine} />
            <Route path='/studyinukraine' component={StudyInUkraine} />
            <Route path='/whyukraine' component={WhyUkraine} />

            <Route path='/requirements' component={Requirements} />
            <Route path='/master&phd' component={MasterAndPhD} />
            <Route path='/transfer' component={Transfer} />

            <Route path='/visa&arrival' component={VisaAndArrival} />
          
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;