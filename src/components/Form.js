import React from 'react';
import './Form.css';

function Form() {
  return (
    <form>
      <input className="bookInput" type="text" placeholder="Book title" />
      <select className="bookSelect" name="category" placeholder="optiopn">
        <option value="Fiction">Fiction</option>
        <option value="History">History</option>
      </select>
      <input className="submit" type="submit" value="Add book" />
    </form>
  );
}

export default Form;
