import React from "react";

class Waiver extends React.Component {
    render() {
      return (
        <div>
        <h3>Online Waiver</h3>
        <img
          height="175px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH95iAKfkpIUnvTSb5xAX_l-r1bNWZjTaAWg&usqp=CAU"
          alt="Waiver Sign"
        />
        
        
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            I agree to the terms as outlined in the online waiver form.
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Sign By Typing Full Name Below
          </label>
          <input
            type="signature"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Sign Here"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
        <a className="btn btn-secondary" href="/" role="button">
          Exit
        </a>
      </div>
    )
  }
}


export default Waiver;