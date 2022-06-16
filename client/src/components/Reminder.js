import React from 'react'

const Reminder = () => {
  return (
  <form>
    <input 
      type="email"
      name="email"
      required
      placeholder="Email"
      />
    <input 
      type="text"
      name="name"
      required 
      placeholder="Full name"
      />
    <button type="submit">Submit</button>
  </form>
  )
}

export default Reminder;
