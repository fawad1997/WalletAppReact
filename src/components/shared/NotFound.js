import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NotFound extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div class="error-details">
                                Sorry, an error has occured, Requested page not found!
                        </div>
                            <div class="error-actions">
                                <Link to="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                Take Me Home </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound
