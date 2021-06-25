import React, { Component } from 'react';
import { LoginView } from './LoginView';
import { users } from './../data';
//import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
        //    check: true,
            email: '',
            password: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: (e.target.value)
        })
    }
    handleSubmit = () => {
        const userSignIn = {
            email: this.state.email,
            password: this.state.password
        }
        const Json = JSON.stringify(userSignIn);
        let itterator = false;
        if (users.length === 0) {
            users.push(Json)
        }
        else {
            users.map(user => {
                if (user.email === userSignIn.email && user.password === userSignIn.password && itterator === false) {
                    itterator = true;
                    alert(`You are signed In`)
                    localStorage.setItem('email', this.state.email)
                    localStorage.setItem('password', this.state.password)
               //     this.setState( {check: true})
                    console.log(this.state.check);
                }
            })
            if (itterator === false) {
                // let path = `./../SignUp/SignUp`
                // history.push(path)
                alert('You Must Signed Up')
                localStorage.setItem('email', this.state.email)
                localStorage.setItem('password', this.state.password)
                
                
            }
            itterator = false;
        }
    }
    render() {
        // if(this.state.check === true){
        //     <Redirect to = './../Profile/Profile' />
        // }

        return (
            <div>
                <LoginView handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit} />
                />
            </div>
        );
    }
}

export default Login;



