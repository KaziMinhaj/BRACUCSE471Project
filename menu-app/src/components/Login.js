import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form className="container-sm login">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" className="form-control"/>
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Login;