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
      const newGuest = {};
    }
  });

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
  );
}
