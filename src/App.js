import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage'
import Random from './pages/Random/random';
import Intro from './pages/intro/intro';
import Quiz from './pages/quiz/quiz';

const App = () => {

  return (
      <>
      <Router>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/mainpage' component={MainPage} />
          <Route path='/random' component={Random} />
        </Switch>
      </Router>
      
      </>
  );
}

export default App;