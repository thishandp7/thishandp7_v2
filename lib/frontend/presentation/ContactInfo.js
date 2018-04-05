import React from 'react';
import styleable from 'react-styleable';
import css from './contactInfo.css';

const ContactInfo = (props) => {
  return(
    <div className={props.css.contact}>
      <h2>CONTACT</h2>
      <div>
        <h3>Phone</h3>
        <span>{props.contactInfo.phone}</span>
      </div>
      <div>
        <h3>E-Mail</h3>
        <span>{props.contactInfo.email}</span>
      </div>
      <div>
        <h3>Skype</h3>
        <span>{props.contactInfo.skype}</span>
      </div>
      <div>
        <h3>Address</h3>
        <span>{props.contactInfo.address}</span>
      </div>
    </div>
  );
};

export default styleable(css)(ContactInfo);
