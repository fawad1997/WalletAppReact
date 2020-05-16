import React, { Component } from 'react'
import axios from 'axios'

class CreateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            accountNumber: '',
            description: '',
            priority: ''
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const newWallet = {
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.description,
            priority: this.state.priority
        }
        axios.post('http://localhost:8080/wallet', newWallet)
            .then((res) => {
                this.props.history.push('/dashboard')
            }).catch((err) => {
                alert("Error")
            })
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Wallet</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")} className="form-control form-control-lg " placeholder="Account Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "accountNumber")} className="form-control form-control-lg" placeholder="Account No" />
                                </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => this.changeHandler(event, "description")} className="form-control form-control-lg" placeholder="Description"></textarea>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "priority")}>
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateWallet
