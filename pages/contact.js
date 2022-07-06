import React from 'react'

const contact = () => {
  return (
    <div className='contact-wrapper'>
      <h3>Contact Form</h3>
      <div className="container">
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <input type="text" id="country" name="country" placeholder="Your Country.." />

          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <input type="submit" value="Submit" />
      </div>
    </div>
  )
}

export default contact