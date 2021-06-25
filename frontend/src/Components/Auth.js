import React, { Component } from 'react';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import NavBar from './Navbar';
import Profile from './Profile/Profile';
import  eProfile  from './Profile/eProfile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Auth extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/SignUp" component={SignUp} />
                        <Route path="/Profile" component={Profile} />
                        <Route path="/editProfile" component={eProfile} />
                       
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default Auth;
