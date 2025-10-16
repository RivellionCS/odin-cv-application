import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
export { Resume };

function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <div>
        <form>
          <h2>General Information</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" name="phone" id="phone" />
          <button type="submit">Submit</button>
        </form>
        <form>
          <h2>Educational Experience</h2>
          <label htmlFor="school-name">School Name:</label>
          <input type="text" name="school-name" id="school-name" />
          <label htmlFor="title">Title Of Study: </label>
          <input type="text" name="title" id="title" />
          <label htmlFor="date-school">Date of Study:</label>
          <input type="date" name="date-school" id="date-school" />
          <button type="submit">Submit</button>
        </form>
        <form>
          <h2>Practical Experience</h2>
          <label htmlFor="company-name">Company Name:</label>
          <input type="text" name="company-name" id="company-name" />
          <label htmlFor="responsibilities">Main Responsibilities:</label>
          <textarea name="responsibilities" id="responsibilities"></textarea>
          <label htmlFor="date-start">Start Date:</label>
          <input type="date" name="date-start" id="date-start" />
          <label htmlFor="date-end">End Date:</label>
          <input type="date" name="date-end" id="date-end" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
