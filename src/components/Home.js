import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export class Home extends Component {
    
    state = {
        patientData: []
    }

    componentDidMount(){
        axios.get("http://localhost:9090/api/patients").then(res=>{
            const patientData = res.data;
            this.setState({patientData})
        })
    }

    render() {
        return (
            <div>
                <h2>Patients</h2>
                <table align='center'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.patientData.map(patient=><RowCreator item={patient} />)}
                    </tbody>
                    <br />
                    <Link to={'/addPatient'}>Register Patient</Link>
                </table>
            </div>
        )
    }
}

export class RowCreator extends Component {
    render() {
        const patient = this.props.item;
        return (
                <tr>
                    <td>{patient.id}</td>
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.age}</td>
                    <td><Link to={'patientDetails/' + patient.id}>Add Data</Link></td>
                    <td><Link to={'analyze/' + patient.id}>Analyze</Link></td>
                </tr>
        )
    }
}


export default Home
