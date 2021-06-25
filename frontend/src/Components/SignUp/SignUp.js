import React, { Component } from 'react';
import { SignupView } from './SignupView';
import { users } from '../data';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            password: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: (e.target.value)
        })
    }
    handleSubmit = () => {
        const userSignUp = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }
        const Json = JSON.stringify(userSignUp);
        let checker = false;
        if (users.length === 0) {
            users.push(Json);
        }
        else {
            users.map(user => {
                if (user.email === userSignUp.email) {
                    checker = true;
                    return alert("user already exist")
                }
            })
            if (checker === false) {
                users.push(Json);
                alert("Signed Up Successfully");
                console.log(users)
            }
            checker === false;
        }
    }
    render() {
        return (
            <div>
                <SignupView handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit} /> />
            </div>
        );
    }
}

export default SignUp;



