import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:4000';

export default function GuestListApi() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState(['']);
  const [lastName, setLastName] = useState(['']);

  useEffect(() => {
    async function getAllGuests() {
      try {
        const response = await fetch(`${baseUrl}/guests`, { method: 'GET' });
        const data = await response.json();
        setGuestList(data);
      } catch (error) {
        console.error('Error fetching guests:', error);
      }
    }
    getAllGuests().catch((error) => {
      console.log(error);
    });
  });

  // Create a new guest
  async function createNewGuest() {
    try {
      const response = await fetch(`${baseUrl}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
      });
      const createdGuest = await response.json();
    } catch (error) {
      console.error('Error creating new guest:', error);
    }
  }
  return;
}
