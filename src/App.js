import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';



function App() {
 return (
<Router>
<Switch>
<Route exact path="/" component={LandingPage} />
<Route exact path="/about" component={AboutPage} />
<Route exact path="/contact" component={ContactPage} />
</Switch>
</Router>
 );
}



export default App;