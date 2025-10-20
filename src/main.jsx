import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { GeneralForm } from "./components/General.jsx";
import { EducationForm } from "./components/Education.jsx";
import { WorkForm } from "./components/Work.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralForm />
    <EducationForm />
    <WorkForm />
  </StrictMode>
);
