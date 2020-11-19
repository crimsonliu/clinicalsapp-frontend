import React, { Component } from 'react'
import axios from 'axios'

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
                </table>
            </div>
        )
    }
}

export class RowCreator extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default Home
