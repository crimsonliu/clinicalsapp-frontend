import React, { Component } from 'react'
import axios from 'axios'
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from '@material-ui/core'
import { toast } from 'react-toastify'

export class CollectClinicals extends Component {

    state = {
             
    }

    componentDidMount(){
        axios.get("http://localhost:9090/api/patients/" + this.props.match.params.patientId)
        .then(res=>{
            this.setState(res.data)
        })
    }

    handleSubmit(event){
        event.preventDefault();

        const data = {
            patientId: this.props.match.params.patientId,
            componentName: this.componentName,
            componentValue: this.componentValue
        }

        axios.post("http://localhost:9090/api/clinicals/",data)
        .then(res=>{
            toast("Patient Data Saved Successfully", {autoClose:3000, position: toast.POSITION.TOP_CENTER})
        })
    }

    render() {
        return (
            <div>
                <h2>Patient Details: </h2>
               <p> First Name: {this.state.firstName} </p>
                <p>Last Name: {this.state.lastName}</p>
                <p>Age: {this.state.age}</p>
                    <InputLabel id="demo-simple-select-label">Clinical Data </InputLabel>
                    <Select onChange={(event)=>{
                        this.componentName = event.target.value
                    }} labelId="demo-simple-select-label" id="demo-simple-select">
                        <MenuItem>Select One</MenuItem>
                        <MenuItem value="bp">Blood Pressue(Sys/Dys)</MenuItem>
                        <MenuItem value="hw">Height/Weight</MenuItem>
                        <MenuItem value="heartRate">Heart Rate</MenuItem>
                    </Select>
                    <br />
                    <TextField id="standard-basic" label="value" name="componentValue" 
                    onChange={(event)=>{
                        this.componentValue = event.target.value
                    }}/> <br /><br />
                    <Button variant="contained" color="primary" 
                    onClick={this.handleSubmit.bind(this)} >Confirm</Button>
            </div>
        )
    }
}

export default CollectClinicals
