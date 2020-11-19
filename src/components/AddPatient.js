import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container } from '@material-ui/core';


toast.configure();

export class AddPatient extends Component {

    handleSubmit(event){

        event.preventDefault();
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age
        }

        axios.post("http://localhost:9090/api/addPatient",data)
        .then(res=>{
            toast("patient added successfully!",{autoClose:2000, position:toast.POSITION.BOTTOM_CENTER})
        })
    }
    render() {
        return (
            <Container>
                <h2>Create Patient:</h2>
                    <div><TextField name="firstName" id="standard-basic" label="First Name"
                        onChange={(event=>this.firstName=event.target.value)}/></div>
                    <div><TextField name="lastName" id="standard-basic" label="Last Name"
                        onChange={(event=>this.lastName=event.target.value)}/></div>
                    <div><TextField name="age" id="standard-basic" label="Age"
                        onChange={(event=>this.age=event.target.value)}/></div><br />
                    <div><Button color="primary" variant="contained" 
                    onClick={this.handleSubmit.bind(this)}>Confirm</Button></div>
            </Container>
        )
    }
}

export default AddPatient
