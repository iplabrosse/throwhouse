import React from "react";
class Contact extends React.Component {
	render() {
	  return (
		<div>
        <h3>Contact Us</h3>
          
        
        <img
          height="415px"
          src="https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?b=1&k=20&m=1271752802&s=170667a&w=0&h=sMEPVY49FAy2UHkhyQLWDHlAhYsR2F2NDkNlSEteO3s="
          alt="Axe Throwing Lanes"
        />
        <p>We will reply to your meesage as soon as possible!</p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Send Message
        </button>

        <a className="btn btn-secondary" href="/" role="button">
          Exit
        </a>
      </div>
    )
  }
}

export default Contact;