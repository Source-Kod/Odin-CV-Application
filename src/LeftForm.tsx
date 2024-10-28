import { useState } from "react";
import { Results } from "./Results.tsx";

function LeftForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        <div className="flex w-1/2 flex-col gap-2">
          <h3 className="mb-2 text-lg font-semibold">Personal Information</h3>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2 w-full rounded border p-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 w-full rounded border p-2"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mb-2 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">Educational Experience</h3>
          <input
            type="text"
            placeholder="School Name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            className="mb-2 w-full rounded border p-2"
          />
          <input
            type="text"
            placeholder="Title of Study"
            value={studyTitle}
            onChange={(e) => setStudyTitle(e.target.value)}
            className="mb-2 w-full rounded border p-2"
          />
          <input
            type="date"
            placeholder="Date of Study"
            value={studyDate}
            onChange={(e) => setStudyDate(e.target.value)}
            className="mb-2 w-full rounded border p-2"
          />
        </div>
        <div>
          <h3>Practical Experience</h3>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mb-2 w-full rounded border p-2"
          />
          <input
            type="text"
            placeholder="Position Title"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
            className="mb-2 w-full rounded border p-2"
          />
          <textarea
            placeholder="Main Responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            rows={2}
            className="mb-2 w-full rounded border p-2"
          />
          <div>
            <input
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mb-2 w-full rounded border p-2"
            />
            <input
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mb-2 w-full rounded border p-2"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Results
          name={name}
          email={email}
          phone={phone}
          schoolName={schoolName}
          studyTitle={studyTitle}
          studyDate={studyDate}
          companyName={companyName}
          positionTitle={positionTitle}
          responsibilities={responsibilities}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </div>
  );
}

export { LeftForm };
