import React, { Component } from 'react';
import { EditProfile } from './editProfile';
import { users } from './../data';

class eProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            occupation: '',
        }
    }
    componentWillMount() {
        let checker = false;
        //  const email= localStorage.getItem('email');
        //  const password= localStorage.getItem('password');
        users.map(user => {
            if (user.email === localStorage.getItem('email') && user.password === localStorage.getItem('password') && checker === false) {
                checker = true;
                var userParser = JSON.parse(JSON.stringify(user))
                return this.setState({
                    ...userParser                                                                            
                }, function () {
                    console.log(".....................................................");
                    console.log(this.state);
                });
            }
        })
        if (checker === false) {
            alert('You Must Login');
        }
        checker = false;
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: (e.target.value)
        })
        //  console.log(this.state);
    }
    handleSubmit = () => {
        const userString = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            occupation: this.state.occupation
        }
        let check = false
        let Users = users.map(user => {
            if (user.email === userString.email && user.password === userString.password && check === false) {
                check = true
                alert ('Profile Edited')
                return Object.assign({}, user, userString)
            }
            return user;
        })
        if (check === false) {
           alert ('Enter Correct Password Again');
        }
        check = false
        console.log(Users)
    }
    render() {
        return (
            <div>  
                <EditProfile    {...this.state} 
                             handleInputChange={this.handleInputChange}
                             handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default eProfile;



