import React from "react";


class About extends React.Component {
	render() {
	  return (
		<div>
       <h3>About Us</h3>
        <img
          height="500px"
          src="https://southwestmetromag.com/sites/default/files/styles/629w-scale/public/field/image/SWM9509_1218_Victoria_Burrow_Golf_Drinks_EJD_0007.jpg?itok=y_iwXfMt"
          alt="Axe target"
        />
        
        <ul className="every-odd">
          <li>Open 5 Days a week</li>
          <li>Fun Friendly Staff</li>
          <li>Private Parties and Corporate Events</li>
          <li>Leauges Every Wednesday Night</li>
          <li>Merch and custom axe design</li>
          <li>Private Lessons</li>
        </ul>
      </div>
    )
  }
}

export default About;