import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {createTransaction} from '../../../actions/projectActions';
import { connect } from 'react-redux';

class AddTransaction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            description: '',
            type: '1'
        }
    }

    changeHandler = (event, fieldName, checkbox) => {
        this.setState({
            [fieldName]: checkbox ? event.target.checked : event.target.value
        })
    }
    handleSubmit = (event) => {
        let newTransaction = { 
            amount: this.state.amount, 
            description: this.state.description, 
            type: this.state.type 
        }
        this.props.createTransaction(newTransaction,this.props.history,this.props.match.params.id);
        event.preventDefault();
    }

    render() {
        let id = this.props.match.params.id;
        const { amount, description, type } = this.state;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/transactions/${id}`} className="btn btn-light">
                                Back to Wallet
                    </Link>
                            <h4 className="display-4 text-center">Record New Transaction</h4>
                            <p className="lead text-center">UBL Account</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="number" min="1" value={amount} onChange={event => this.changeHandler(event, "amount", false)} className="form-control form-control-lg" placeholder="Amount" />
                                </div>
                                <div className="form-group">
                                    <textarea value={description} onChange={event => this.changeHandler(event, "description", false)} className="form-control form-control-lg" placeholder="Description"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Transaction Type : </label>
                                    <div className="form-check form-check-inline">
                                        <input checked={type === '1'} className="form-check-input" type="radio" id="income" onChange={event => this.changeHandler(event, "type", false)} value="1" />
                                        <label className="form-check-label" htmlFor="income">Income</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input checked={type === '2'} className="form-check-input" type="radio" id="expense" onChange={event => this.changeHandler(event, "type", false)} value="2" />
                                        <label className="form-check-label" htmlFor="expense">Expense</label>
                                    </div>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{createTransaction})(AddTransaction)
