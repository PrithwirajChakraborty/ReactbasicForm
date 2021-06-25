import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Style = {
    width: '50%',
    height: '50%'
};
const SignupView = (props) => {
    return (
        <div>
            <div style={Style} className="container ">
                <div className="container col-md-10 ">
                    <h2 className="text-center">Sign Up</h2>
                    <form >
                        <FormGroup className="col-md-12" >
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={props.handleInputChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <br />
                        <FormGroup className="col-md-12" >
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter password"
                                name="name"
                                onChange={props.handleInputChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <br />
                        <FormGroup className="col-md-12" >
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                onChange={props.handleInputChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </form>
                    <div className="text-center">
                        <button className="btn btn-success " onClick={props.handleSubmit}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { SignupView };