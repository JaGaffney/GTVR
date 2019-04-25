import React, { useState } from 'react'

const Contact = props => {
  return (
    <div className="contact__div-Area">
      <div className="contact__div">
          <div className="contact__div-title">
            <h1>Contact</h1>
            <h4>Add some generic tag line here</h4>
          </div>

          <div className="contact__div-body">
          <p>Feel free to contact us below</p>
          
          <div className="contact__div-form">
            <form autoComplete="off">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder={'Name'}
                  required
                />

                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder={'Email'}
                  required
                />

                <input
                  className="form-control"
                  type="textarea"
                  name="text"
                  placeholder={'Question'}
                  required
                />

                <button type="submit" className="btn">Submit</button>

              </div>
            </form>

          </div>

          </div>
      </div>
      
    </div>
  )
}

export default Contact
