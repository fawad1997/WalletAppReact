import React, { Component } from 'react'

class CreateWallet extends Component {
    render() {
        return (
            <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Wallet</h5>
                    <hr />
                    <form action="dashboard.html">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Account Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Account No" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Description"></textarea>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-lg" name="priority">
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
