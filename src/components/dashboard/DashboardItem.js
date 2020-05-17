import React, { Component } from 'react'

class DashboardItem extends Component {
    render() {
        const wallet = this.props.wallet
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-lg-4 col-md-3 col-6">
                            <h3>{wallet.name}</h3>
                            <p>Account Number: {wallet.accountNumber}</p>
                            <p>{wallet.description}</p>
                        </div>
                        <div className="col-lg-4 col-md-3 col-6 text-center">
                            <h3>Balance</h3>
                            <h1>Rs. {wallet.currentBalance}</h1>
                        </div>
                        <div className="col-md-4 col-12 d-lg-block">
                            <ul className="list-group">
                                <a href="transactions.html">
                                    <li className="list-group-item board text-success">
                                        <i className="fa fa-flag-checkered pr-1"> View Transactions </i>
                                    </li>
                                </a>
                                <a href="walletForm.html">
                                    <li className="list-group-item update text-info">
                                        <i className="fa fa-edit pr-1"> Update Account Info</i>
                                    </li>
                                </a>
                                <a href="/">
                                    <li className="list-group-item delete text-danger">
                                        <i className="fa fa-minus-circle pr-1"> Delete Account</i>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardItem
