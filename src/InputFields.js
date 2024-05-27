import { useState } from 'react';

export default function InputFields() {
  // 1. create state for the component
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <>
      <label htmlFor="First name">First Name </label>
      <input
        id="First name"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.currentTarget.value);
        }}
      />
      <p>{firstName}</p>
      <label htmlFor="Last name">Last Name </label>
      <input
        id="Last name"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => {
          setLastName(event.currentTarget.value);
        }}
      />
      <p>{lastName}</p>
    </>
  );
}
