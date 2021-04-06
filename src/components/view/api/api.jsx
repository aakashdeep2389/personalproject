import React, { Component } from 'react'

export class Api extends Component {
    state = {
        person : ""
    }

    componentDidMount(){
        this.CallingApi()
    }

    CallingApi = () => {
        let _URL = "https://api.randomuser.me/"
        fetch(_URL).then(resp => {
            return resp.json()
        }).then(data => {
            let apidata = data
            console.log("apidata" , apidata.results[0])
            this.setState({person : apidata})
        })
    }

    render() {
        let {person} = this.state
        return (
            <div className="body-container-wrapper bg-light">
                {/* <h1>{person}</h1> */}
            </div>
        )
    }
}

export default Api
