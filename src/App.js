import './App.css';
import { error } from 'console';
import { useEffect, useState } from 'react';
import TestCheckbox from './TestCheckbox';
// import InputFields from './InputFields';
import TestInput from './TestInput';

const baseUrl = 'http://localhost:4000';
// const [guestList, setGuestList] = useState([]);
const response = await fetch(`${baseUrl}/guests`);
const allGuests = await response.json();

export default function App() {
  const [guestList, setGuestList] = useState([]);
  // Async function to show all guests in list (from express-guest-list-api)
  useEffect(() => {
    async function testInput() {
      const response = await fetch(
        `${baseUrl}/guests` /* {method: 'GET'} not needed because method is by default 'GET'*/,
      );
      const list = await response.json();
      setGuestList(list);
      console.log(setGuestList);
      // setIsLoading(false);
    }
    testInput().catch((error) => console.log(error));
  }, []); // empty [] avoids endless loop
  async function newGuest() {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
    });
    const createdGuest = await response.json();
  }

  const [formData, setFormData] = useState({
    // Function to contain a state object that holds the values of the form inputs
    firstName: '', // Initial state of name input fields are empty strings
    lastName: '',
    // attending: false, // initial state as a boolean   // maybe not necessary when you use toggleAttendance
  });

  // const [submittedNames, setSubmittedNames] = useState([]);

  // const handleChange = (event) => {
  //   // single function that handles change for both input fields. It extracts name and value properties from the input fields and updates the state value for that input field using setFormData().
  //   const { name, value } = event.target;
  //   setFormData((prevState) => ({ ...prevState, [name]: value }));
  // };

  return (
    <div>
      {guestList.map((guest) => {
        return (
          <div key={`user-${Number(guestList.uuid)}`}>
            <p>
              {guestList.name.first} {guestList.name.last}
            </p>
          </div>
        );
      })}
    </div>
    // <form onSubmit={handleSubmit}>
    //   {' '}
    //   {/* Input boxes with First and Last name in a form and accurate label*/}
    //   <label htmlFor="firstName">
    //     First Name:
    //     <input
    //       name="firstName"
    //       placeholder="First name"
    //       value={formData.firstName} // values of the input fields are derived from the state values formData.firstName.
    //       onChange={handleChange} // handleChange is passed on to the onChange() event
    //     />
    //   </label>
    //   <label htmlFor="lastName">
    //     Last Name:
    //     <input
    //       name="lastName"
    //       placeholder="Last name"
    //       value={formData.lastName} // values of the input fields are derived from the state values formData.lastName.
    //       onChange={handleChange} // handleChange is passed on to the onChange() event
    //     />
    //   </label>
    //   {/* <label>
    //   Attendence:
    //   <input
    //     type="attendence"
    //     name="notAttending"
    //     value={formData.attendence}
    //   />
    // </label> */}
    //   <input type="submit" value="Submit" />
    //   <div>
    //     <h2>Guest List</h2>
    //     {submittedNames.map((name, index) => (
    //       <div
    //         key={`${name.firstName}-${name.lastName}-${formData.attending}`} // maybe formData.attending will cause problems later on when changing the state
    //         data-test-id="guest"
    //       >
    //         <p>Guest {index + 1}:</p>
    //         <p>
    //           {name.firstName} {name.lastName}
    //         </p>
    //         <p>{name.attending ? 'attending' : 'not attending'}</p>
    //         <label htmlFor="checkbox">
    //           {' '}
    //           {/* Checkboxes of all guests change equally when clicking on one checkbox */}
    //           {/* Attend */}
    //           <input
    //             type="checkbox"
    //             // value={attending}         ///
    //             checked={name.attending}
    //             onChange={() => toggleAttendance(index)} // onChnage={checkHanlder}
    //             aria-label={`${name.firstName} ${name.lastName} attending status`}
    //           />
    //           attending
    //         </label>
    //         {/* <p>Checkbox is {isChecked ? 'attending' : 'not attending'}</p>{' '} */}
    //         {/* Checkboxes of all guests change equally when clicking on one checkbox */}
    //       </div>
    //     ))}
    //   </div>
    // </form>
  );
}
