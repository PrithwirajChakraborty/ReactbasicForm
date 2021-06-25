import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const Style = {
    width: '50%',
    height: '50%'
};

const EditProfile = (props) => {
    
    return (
        
        <div>
            <div style={Style} className="container ">
                <div className="container col-md-10 ">
                    <h2 className="text-center">Edit Profile</h2>
                    <form >
                        <FormGroup className="col-md-12" >
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder= {props.name}
                                name="name"
                                onChange={props.handleInputChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <br />
                        <FormGroup className="col-md-12" >
                            <ControlLabel>Occupation</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder={props.occupation}
                                name="occupation"
                                onChange={props.handleInputChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup className="col-md-12" >
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                type="password"
                                placeholder="Enter Password for Confirmaton"
                                name="password"
                                onChange={props.handleInputChange}
                            />
                            <FormControl.Feedback />
                            
                        </FormGroup>
                        
                    </form>
                    <div className="text-center">
                        <button className="btn btn-success " onClick={props.handleSubmit}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { EditProfile };