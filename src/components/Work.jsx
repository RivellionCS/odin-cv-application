import { useState } from "react";
export { WorkForm };
import "../styles/form.css";

function WorkSection({
  name,
  responsibilities,
  dateStart,
  dateEnd,
  status = false,
}) {
  const [editStatus, setEditStatus] = useState(status);

  if (editStatus) {
    return (
      <WorkForm
        name={name}
        responsibilities={responsibilities}
        dateStart={dateStart}
        dateEnd={dateEnd}
      />
    );
  }

  function changeEditStatus() {
    setEditStatus(true);
  }

  return (
    <div className="form-group">
      <h2>Work Experience</h2>
      <p>Company Name: {name}</p>
      <p>Responsibilities: {responsibilities}</p>
      <p>Start Date: {dateStart}</p>
      <p>End Date: {dateEnd}</p>
      <button onClick={changeEditStatus}>Edit</button>
    </div>
  );
}

function WorkForm({
  name = "",
  responsibilities = "",
  dateStart = "",
  dateEnd = "",
  status = false,
}) {
  const [submitted, setSubmitted] = useState(status);
  const [formData, setFormData] = useState({
    name: name,
    responsibilities: responsibilities,
    dateStart: dateStart,
    dateEnd: dateEnd,
  });

  function handleChange(e) {
    const updatedFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <WorkSection
        name={formData.name}
        responsibilities={formData.responsibilities}
        dateStart={formData.dateStart}
        dateEnd={formData.dateEnd}
      />
    );
  }

  return (
    <div>
      <h2>Practical Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="company-name">Company Name:</label>
          <input
            type="text"
            name="name"
            id="company-name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="responsibilities">Main Responsibilities:</label>
          <textarea
            name="responsibilities"
            id="responsibilities"
            defaultValue={responsibilities}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date-start">Start Date:</label>
          <input
            type="date"
            name="dateStart"
            id="date-start"
            defaultValue={dateStart}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date-end">End Date:</label>
          <input
            type="date"
            name="dateEnd"
            id="date-end"
            defaultValue={dateEnd}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
