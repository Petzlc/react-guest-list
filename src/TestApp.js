import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:4000';

export default function TestApp() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Fetching the whole guest list
  useEffect(() => {
    async function guestListFetch() {
      const response = await fetch(`${baseUrl}/guests` /* , {method:'GET',}*/);
      const list = await response.json();
      setGuestList(list);
      console.log('list', list);
    }
    guestListFetch().catch((error) => {
      console.log(error);
    });
  }, []); // empty [] avoids endless loop

  // Adding a guest to the guest list
  async function addGuest() {
    const newGuest = {
      firstName: firstName,
      lastName: lastName,
      attending: false,
    };
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
    });
    const createdGuest = await response.json();
    // resets input fields to empty input fields
    setGuestList([...guestList, createdGuest]);
    setFirstName('');
    setLastName('');
  }
  // const newGuest = (event) => {
  //   event.preventDefault();
  //   addGuest();

  return (
    <div>
      <h1>Guest List</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="First name">
          First Name
          <input
            id="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            placeholder="First name"
          />
        </label>
        <label htmlFor="Last name">
          Last Name
          <input
            id="Last name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            placeholder="Last name"
          />
        </label>
      </form>
    </div>
  );
}
