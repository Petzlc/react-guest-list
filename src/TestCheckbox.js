import { useState } from 'react';

const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  );
};

export default function TestCheckbox() {
  const allGuests = [{ firstName: '', lastName: '', attending: false }];
  const [guests, setGuests] = useState(allGuests);

  // function TestCheckbox() {
  //   const [guests, setGuests] = useState(allGuests);

  const updateAttendingStatus = (index) => {
    setGuests(
      guests.map((guest, currentIndex) =>
        currentIndex === index
          ? { ...guest, attending: !guests.attending }
          : guest,
      ),
    );

    // or
    // setGuests([
    //   ...guests.slice(0, index),
    //   { ...guests[index], attending: !guests[index].attending },
    //   ...guests.slice(index + 1),
    // ]);
  };
  return (
    <div className="TestCheckbox">
      {guests.map((guest, index) => (
        <Checkbox
          key={`guest-${guest.id}`} // guest.id
          isChecked={guest.attending}
          checkHandler={() => updateAttendingStatus(index)}
          label={`${guest.firstName} ${guest.lastName}`}
          index={index}
        />
      ))}
      <div>
        <pre>{JSON.stringify(guests, null, 2)}</pre>
      </div>
    </div>
  );
}
