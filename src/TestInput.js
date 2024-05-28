import { useState } from 'react';

export default function TestInput() {
  const [formData, setFormData] = useState({
    // Function to contain a state object that holds the values of the form inputs
    firstName: '', // Initial state of name input fields are empty strings
    lastName: '',
  });

  const handleChange = (event) => {
    // single function that handles change for both input fields. It extracts name and value properties from the input fields and updates the state value for that input field using setFormData().
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      // resets the input fields to empty
      firstName: '',
      lastName: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {' '}
      {/* Input boxes with First and Last name in a form and accurate label*/}
      <label htmlFor="First name">
        First Name:
        <input
          name="firstName"
          placeholder="First name"
          value={formData.firstName} // values of the input fields are derived from the state values formData.firstName.
          onChange={handleChange} // handleChange is passed on to the onChange() event
        />
      </label>
      <label htmlFor="First name">
        Last Name:
        <input
          name="lastName"
          placeholder="Last name"
          value={formData.lastName} // values of the input fields are derived from the state values formData.lastName.
          onChange={handleChange} // handleChange is passed on to the onChange() event
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
