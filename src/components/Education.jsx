import { useState } from "react";
export { EducationForm };
import "../styles/form.css";

function EducationSection({ name, title, date, status = false }) {
  const [editStatus, setEditStatus] = useState(status);

  if (editStatus) {
    return <EducationForm name={name} title={title} date={date} />;
  }

  function changeEditStatus() {
    setEditStatus(true);
  }

  return (
    <div className="form-group">
      <h2>Education</h2>
      <p>School Name: {name}</p>
      <p>School Title: {title}</p>
      <p>Graduation Date: {date}</p>
      <button onClick={changeEditStatus}>Edit</button>
    </div>
  );
}

function EducationForm({ name = "", title = "", date = "", status = false }) {
  const [submitted, setSubmitted] = useState(status);
  const [formData, setFormData] = useState({
    name: name,
    title: title,
    date: date,
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
      <EducationSection
        name={formData.name}
        title={formData.title}
        date={formData.date}
      />
    );
  }

  return (
    <div>
      <h2>Educational Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="school-name">School Name:</label>
          <input
            type="text"
            name="name"
            id="school-name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="school-title">Title Of Study: </label>
          <input
            type="text"
            name="title"
            id="school-title"
            defaultValue={title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="school-date">Date of Study:</label>
          <input
            type="date"
            name="date"
            id="school-date"
            defaultValue={date}
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
