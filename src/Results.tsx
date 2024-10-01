interface ResultsProps {
  name: string;
  email: string;
  phone: string;
  schoolName: string;
  studyTitle: string;
  studyDate: string;
  companyName: string;
  positionTitle: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
}

function Results({ name, email, phone, schoolName, studyTitle, studyDate, companyName, positionTitle, responsibilities, startDate, endDate }: ResultsProps) {
  return (
    <div className="flex flex-col ml-4 mt-4 border-2 border-gray-300 p-4">
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    <div>
      <h2>Educational Experience</h2>
      <p>School Name: {schoolName}</p>
      <p>Title of Study: {studyTitle}</p>
      <p>Date of Study: {studyDate}</p>
    </div>
    <div>
      <h2>Practical Experience</h2>
      <p>Company Name: {companyName}</p>
      <p>Position Title: {positionTitle}</p>
      <p>Main Responsibilities: {responsibilities}</p>
      <p>Date From: {startDate}</p>
      <p>Date Until: {endDate}</p>
    </div>
    </div>
  );
}

export { Results };
