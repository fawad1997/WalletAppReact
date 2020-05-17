import React, { Component } from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {getWallet,updateWallet} from '../../../actions/projectActions'

class UpdateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            name: '',
            accountNumber: '',
            description: '',
            priority: '',
            currentBalance:'',
            errors:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
        if(nextProps.wallet){
            this.setState({
                id:nextProps.wallet.id,
                name: nextProps.wallet.name,
                accountNumber: nextProps.wallet.accountNumber,
                description: nextProps.wallet.description,
                currentBalance:nextProps.wallet.currentBalance,
                priority: nextProps.wallet.priority,
            })
        }
    }

    componentDidMount(){
        this.props.getWallet(this.props.match.params.id)
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const updateWallet = {
            id:this.state.id,
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.description,
            currentBalance:this.state.currentBalance,
            priority: this.state.priority
        }
        this.props.updateWallet(this.state.id,updateWallet,this.props.history)
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Wallet</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" value={this.state.name} onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Account Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={this.state.accountNumber} onChange={(event) => this.changeHandler(event, "accountNumber")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.accountNumber})} placeholder="Account No" />
                                    <p className="text-danger">{this.state.errors.accountNumber}</p>
                                </div>
                                <div className="form-group">
                                    <textarea value={this.state.description} onChange={(event) => this.changeHandler(event, "description")} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.description})} placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" value={this.state.priority} onChange={(event) => this.changeHandler(event, "priority")}>
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    errors:state.errors,
    wallet:state.wallet.wallet
})

export default connect(mapStateToProps,{getWallet,updateWallet})(UpdateWallet)
