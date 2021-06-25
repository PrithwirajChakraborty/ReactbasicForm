import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Style = {
    width: '50%',
    height: '50%'
  };
const LoginView = (props) => {
    return(
        <div>
            <div style={Style} className="container ">
        <div className="container col-md-10 ">
            <h2 className="text-center"> Login</h2>
            <form >
                <FormGroup className="col-md-12" >
                    <ControlLabel>Name</ControlLabel>
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
            <button className="btn btn-info " onClick={props.handleSubmit}>Login</button>
            </div>
        </div>
        </div>
    </div>
    )
}
export {LoginView};