import React from 'react';
import { Image, Jumbotron, Button, } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import './avatar.png';

const Style = {
    backgroundColor: '#eff0f2',
    paddingTop: '0px',
}
const Style2 = {
    width: "100%",
    height: "50%"
}
const ProfileView = (props) => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Welcome  {props.name}</h2>
            <hr />
            <div style={Style} className="container col-md-2">
                {/* <Image className="text-center" src="/avatar.png" rounded /> */}
                <h2>Information</h2>
                <p><b>Name:</b>  {props.name}</p>
                <p><b>Email:</b>{props.email}</p>
                <p><b>Occupation:</b>{props.occupation}</p>
                <Link to='/editProfile'>Edit Profile</Link>
            </div>
            <hr />
            <div className="container col-md-8">    
                <Jumbotron>
                    <p className="lead">Leave Your Post</p>
                    <hr className="my-2" />
                    <textarea style={Style2} name="text" row="10" id="exampleText" />
                    <p className="lead">
                        <Button className="btn btn-info"onClick={props.handleSubmit}>Post</Button>
                    </p>
                </Jumbotron>
            </div>
        </div>
    )
}
export { ProfileView };