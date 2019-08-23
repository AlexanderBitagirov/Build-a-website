import React, {Component} from "react";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";


class App extends  Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route   path="About" component={About} />
            <Route   path="Contact" component={Contact} />
            <Route    component={NoMath} />

          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App; 