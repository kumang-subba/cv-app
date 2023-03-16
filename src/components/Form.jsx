import React from "react";
import "../style/Form.css";

function UserForm({ formUser, handleChange, handleSubmit }) {
  return (
    <div className="user-input">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h2>General Information</h2>
          </legend>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formUser.name}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={handleChange}
            value={formUser.email}
            name="email"
          />
          <label htmlFor="phNum">Phone number:</label>
          <input
            type="tel"
            onChange={handleChange}
            value={formUser.tel}
            name="tel"
          />
        </fieldset>
        <fieldset>
          <legend>
            <h2>Education</h2>
          </legend>
          <label htmlFor="schName">School name:</label>
          <input
            type="text"
            name="schName"
            onChange={handleChange}
            value={formUser.schName}
          />
          <label htmlFor="studyTitle">Education level:</label>
          <input
            type="text"
            name="studyTitle"
            onChange={handleChange}
            value={formUser.studyTitle}
          />
          <label htmlFor="dateOfStudy">Date of study:</label>
          <input
            type="text"
            name="dateOfStudy"
            onChange={handleChange}
            value={formUser.dateOfStudy}
          />
        </fieldset>
        <fieldset>
          <legend>
            <h2>Experience</h2>
          </legend>
          <label htmlFor="companyName">Company name:</label>
          <input
            type="text"
            name="companyName"
            onChange={handleChange}
            value={formUser.companyName}
          />
          <label htmlFor="companyPos">Position title:</label>
          <input
            type="text"
            name="companyPos"
            onChange={handleChange}
            value={formUser.companyPos}
          />
          <label htmlFor="tasks">Company Tasks</label>
          <br />
          <textarea
            name="tasks"
            id="tasks"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formUser.tasks}
          ></textarea>
        </fieldset>
        <button className="btn">Create Cv</button>
      </form>
    </div>
  );
}

export default UserForm;
