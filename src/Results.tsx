interface ResultsProps {
  name: string;
  email: string;
  phone: string;
}

function Results({ name, email, phone }: ResultsProps) {
  return (
    <div>
      <h2>Results:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export { Results };
