import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Manage from './Pages/Manage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/logins" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/manage" component={Manage} />
                <Route component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
