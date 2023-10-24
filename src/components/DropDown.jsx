import React, { useState } from 'react';


function DropDown () {
    const [value, setValue] = React.useState('Theodore');

    const handleChange = (event) => {
   
      setValue(event.target.value);
   
    };
   
    return (
   
      <div>
   
        <label>
   
          Select Recipient:
   
          <select value={value} onChange={handleChange}>
   
            <option value="Theodore">THEODORE</option>
            <option value="Ryan">RYAN</option>
            <option value="Charlie">CHARLIE</option>
            <option value="LORETTA">LORETTA</option>
            <option value="Jess">JESS</option>
            <option value="Maxi">MAXI</option>
   
          </select>
   
        </label>
        <p>YOU'RE HELPING {value}!</p>
      </div>
   
    );
   
   };

export default DropDown