import React from "react";
import "../style/Display.css";
function Displayform({ sendForm, setSendForm }) {
  return (
    <div className="display">
      <div className="name">
        <h1>{sendForm.name}</h1>
      </div>
      <div className="education">
        <h2 className="heading">Education</h2>
        <h4>School: {sendForm.schName}</h4>
        <h4>Study title: {sendForm.studyTitle}</h4>
        <h4>Date of study: {sendForm.dateOfStudy}</h4>
      </div>
      <div className="contacts">
        <h2 className="heading">Contact details</h2>
        <h4>
          email: <em>{sendForm.email}</em>
        </h4>
        <h4>Telephone number: {sendForm.tel}</h4>
      </div>
      <div className="exp">
        <h2 className="heading">Carreer and experience</h2>
        <div className="carreer">
          <h4>Company name: {sendForm.companyName}</h4>
          <h4>Position: {sendForm.companyPos}</h4>
          <p>Accomplishments and Tasks: {sendForm.tasks}</p>
        </div>
      </div>
    </div>
  );
}

export default Displayform;
