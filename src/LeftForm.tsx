import { useState } from "react";
import { Results } from "./Results.tsx";

function LeftForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); 
  return (
    <div className="flex">
      <div className="w-1/2">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="w-1/2">
        <Results name={name} email={email} phone={phone} />
      </div>
    </div>
  );
}

export { LeftForm };
