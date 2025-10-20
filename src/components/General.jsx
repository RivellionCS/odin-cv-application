import { useState } from "react";
export { GeneralForm };
import "../styles/form.css";

function GeneralSection({ name, email, phone, status = false }) {
  const [editStatus, setEditStatus] = useState(status);

  function changeEditStatus() {
    setEditStatus(true);
  }

  if (editStatus) {
    return <GeneralForm name={name} email={email} phone={phone} />;
  }

  return (
    <div className="form-group">
      <h2>General Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={changeEditStatus}>Edit</button>
    </div>
  );
}

function GeneralForm({ name = "", email = "", phone = "", status = false }) {
  const [submitted, setSubmitted] = useState(status);
  const [formData, setFormData] = useState({
    name: name,
    email: email,
    phone: phone,
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
      <GeneralSection
        name={formData.name}
        email={formData.email}
        phone={formData.phone}
      />
    );
  }

  return (
    <div>
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user-name">Name:</label>
          <input
            type="text"
            name="name"
            id="user-name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user-email">Email:</label>
          <input
            type="email"
            name="email"
            id="user-email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user-phone">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            id="user-phone"
            defaultValue={phone}
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
