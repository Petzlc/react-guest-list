import { useState } from 'react';

export default function TestInput() {
  const [formData, setFormData] = useState({
    // Function to contain a state object that holds the values of the form inputs
    firstName: '', // Initial state of name input fields are empty strings
    lastName: '',
    attending: false, // initial state as a boolean
  });

  const [submittedNames, setSubmittedNames] = useState([]);

  const handleChange = (event) => {
    // single function that handles change for both input fields. It extracts name and value properties from the input fields and updates the state value for that input field using setFormData().
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, attending } = formData;
    console.log(formData);
    setSubmittedNames([...submittedNames, { firstName, lastName, attending }]);
    setFormData({
      // resets the input fields to empty and the attending-state to default
      firstName: '',
      lastName: '',
      attending: false,
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
      {/* <label>
        Attendence:
        <input
          type="attendence"
          name="notAttending"
          value={formData.attendence}
        />
      </label> */}
      <input type="submit" value="Submit" />
      <div>
        <h2>Guest List</h2>
        {submittedNames.map((name, index) => (
          <div
            key={`${name.firstName}-${name.lastName}-${formData.attending}`} // maybe formData.attending will cause problems later on when changing the state
          >
            <p>Guest {index + 1}:</p>
            <p>
              {name.firstName} {name.lastName}
            </p>
            <p>{name.attending ? 'attending' : 'not attending'}</p>
          </div>
        ))}
      </div>
    </form>
  );
}
