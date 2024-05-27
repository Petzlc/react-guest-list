import { useState } from 'react';

export default function InputFields() {
  return (
    <>
      <label htmlFor="First name">First Name </label>
      <input id="First name" placeholder="First Name" />
      <label htmlFor="Last name">Last Name </label>
      <input id="Last name" placeholder="Last Name" />
    </>
  );
}
