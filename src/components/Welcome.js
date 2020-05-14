import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Personal Expense Manager</h1>
                                <p className="lead">
                                    Create your account to manage your daily expense and hisab kitab
                        </p>
                                <hr />
                                <a href="register.html" className="btn btn-lg btn-primary mr-2">
                                    Sign Up
                        </a>
                                <a href="login.html" className="btn btn-lg btn-secondary mr-2">
                                    Login
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
