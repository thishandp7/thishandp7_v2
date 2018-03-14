import React from 'react';
import styleable from 'react-styleable';
import css from './contactInfo.css';

const ContactInfo = (props) => {
  return(
    <div className={props.css.contact}>
      <h2>Contact</h2>
      <div>
        <h3>Phone</h3>
        {props.contactInfo.phone}
      </div>
      <div>
        <h3>Skype</h3>
        {props.contactInfo.skype}
      </div>
      <div>
        <h3>E-Mail</h3>
        {props.contactInfo.email}
      </div>
      <div>
        <h3>Address</h3>
        {props.contactInfo.address}
      </div>
    </div>
  );
};

export default styleable(css)(ContactInfo);
