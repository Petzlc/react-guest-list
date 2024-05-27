import { useState } from 'react';

export default function InputFields() {
  // 1. create state for the component
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // console.log({ firstName }, { lastName });
  return (
    <>
      <form>
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
      </form>{' '}
      {/* Maybe only one form element needed closing after last name*/}
      <form>
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
      </form>
    </>
  );
}
