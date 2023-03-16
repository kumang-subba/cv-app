import React, { useState } from "react";
import UserForm from "./components/Form";
import "./App.css";
import Displayform from "./components/Display";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    schName: "",
    studyTitle: "",
    dateOfStudy: "",
    companyName: "",
    companyPos: "",
    tasks: "",
  });
  const [isForm, setIsForm] = useState(false);
  const [sendForm, setSendForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const sendForm = { ...form };
    setSendForm(sendForm);
    setIsForm(true);
  };
  return (
    <div className="app">
      <h1>Create a CV</h1>
      <div className="container">
        <UserForm
          formUser={form}
          handleChange={(e) => handleChange(e)}
          handleSubmit={(e) => handleSubmit(e)}
        />
        {isForm && (
          <Displayform sendForm={sendForm} setSendForm={setSendForm} />
        )}
      </div>
    </div>
  );
}

export default App;
