import React from "react";

class Reserve extends React.Component {
    render() {
      return (
        <div>
         <h3>Reserve Online Below</h3>
        <img
          height="175px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkTxiRohNskLJn3r2ripdIiR1B-lZAlG3rw&usqp=CAU"
          alt="Wooden Reserve Now Sign"
        />
        <div className="mb-3">
          <label htmlFor="floatingInput">First and Last Name</label>
          <input
            type="first and last name"
            className="form-control"
            id="Input"
            placeholder="Isaiah LaBrosse"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ffloatingInput">Address</label>
          <input
            type="address"
            className="form-control"
            id="Input"
            placeholder="123 Main St Merrimack NH, 03054"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="floatingInput">Phone Number</label>
          <input
            type="phone number"
            className="form-control"
            id="Input"
            placeholder="(555)218-5555"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="floatingInput">Email</label>
          <input
            type="email"
            className="form-control"
            id="Input"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="floatingInput">How Many Guest</label>
          <input
            type="number"
            className="form-control"
            id="Input"
            placeholder="# of guest"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Reserve Now
        </button>
        <a className="btn btn-secondary" href="/" role="button">
          Exit
        </a>
      </div>
    )
  }
}


export default Reserve;