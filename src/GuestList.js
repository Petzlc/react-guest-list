export default function GuestList() {
  const baseUrl = 'http://localhost:4000';
  const response = await fetch(`${baseUrl}/guests`);
  const allGuests = await response.json();
}
