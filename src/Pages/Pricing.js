import React from "react";

import Image from "./axe.jpeg";

class Pricing extends React.Component {
    render() {
      return (
        
         <div>
         <h3>Lane Pricing</h3>
         <img src={Image} width="450"/>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Number of Hours</th>
              <th scope="col">Price Per Person</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>$35</td>
            </tr>
            <tr>
              <th scope="row">2+</th>
              <td>$30</td>
            </tr>
          </tbody>
        </table>
        <div>
        
        <a className="btn btn-secondary" href="/" role="button">
          Exit
        </a>
          <br />
        </div>
      </div>
    
    )
  }
}


export default Pricing;