import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Transaction extends Component {
    render() {
        let id = this.props.match.params.id;
        return (
            <div className="container">
                <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
                    Back
                </Link>
                <Link to={`/trns/add/${id}`} className="btn btn-info btn-lg mb-3">
                    <i className="fas fa-plus-circle"> Record new Transaction</i>
                </Link>
                <br />
                <div className="card text-center">
                    <div className="card-header bg-success text-white">
                        <h4>UBL Account Balance</h4>
                        <h1>Rs. 27000</h1>
                    </div>
                </div>
                <hr />
              
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-danger">
                            <td>2020-04-15</td>
                            <td>PTCL Bill</td>
                            <td className="text-danger">-3000</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                        <tr className="table-success">
                            <td>2020-04-01</td>
                            <td>Income</td>
                            <td className="text-success">+30000</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Transaction
