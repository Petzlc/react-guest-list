import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:4000';

export default function App() {
  const [guests, setGuests] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetching the whole guest list
  useEffect(() => {
    async function fetchGuests() {
      const response = await fetch(`${baseUrl}/guests` /* , {method:'GET',}*/);
      const allGuests = await response.json();
      setGuests(allGuests);
      console.log('allGuests', allGuests);
    }
    fetchGuests().catch((error) => {
      console.log(error);
    });
  }, []); // empty [] avoids endless loop

  // Adding a guest to the guest list
  const addGuest = async () => {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, attending: false }),
    });
    const createdGuest = await response.json();
    setGuests([...guests, createdGuest]);
    setFirstName('');
    setLastName('');
  };

  const deleteGuest = async (id) => {
    await fetch(`${baseUrl}/guests/${id}`, { method: 'DELETE' });
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  const toggleAttending = async (id, attending) => {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: !attending }),
    });
    const updatedGuest = await response.json();
    const updatedGuests = guests.map((guest) =>
      guest.id === id ? updatedGuest : guest,
    );
    setGuests(updatedGuests);
  };

  //   const updatedGuest = await response.json();

  //   // Create a new guest list with the updated guest
  //   const newGuestList = guestList.map((guest) => {
  //     if (guest.id === id) {
  //       return {
  //         ...guest,
  //         attending: updatedGuest.attending,
  //       };
  //     }
  //     return guest;
  //   });

  //   setGuestList(newGuestList);
  // }

  return (
    <div>
      <h1>Guest List</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await addGuest;
        }}
      >
        <label htmlFor="First name">
          First Name:
          <input
            // id="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            placeholder="First name"
          />
        </label>
        <label htmlFor="Last name">
          Last Name:
          <input
            // id="Last name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            placeholder="Last name"
            onKeyPress={async((event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                // await addGuest();
              }
            })}
          />
        </label>
      </form>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id} data-test-id="guest">
            {guest.firstName} {guest.lastName}
            <button onClick={() => deleteGuest(guest.id)}>Remove</button>
            <input
              type="checkbox"
              checked={guest.attending}
              onChange={() => toggleAttending(guest.id, guest.attending)}
              aria-label={`${guest.firstName} ${guest.lastName} attending status`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
