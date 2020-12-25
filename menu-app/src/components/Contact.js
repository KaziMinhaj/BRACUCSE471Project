import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
        <div className="container login">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" SandyWesBos"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Write Down your valuable thoughts</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"/>
            </div>
            <div>
             <button type="button" class="btn btn-primary">Submit</button>
            </div>
        </div>
        );
    }
}

export default Contact;