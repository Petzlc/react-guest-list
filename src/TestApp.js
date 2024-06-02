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

  useEffect(() => {
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
    setGuestList(newGuestList);
    setFirstName('');
    setLastName('');
  }

  return (
    <div>

    </div>
  );
}
