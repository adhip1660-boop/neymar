import React from 'react';

const Form = () => {
  return (
    <form>
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" required /><br /><br />

      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email" required /><br /><br />

      <label htmlFor="password">Password:</label><br />
      <input type="password" id="password" name="password" required /><br /><br />
      <label htmlFor="confirmPassword">Confirm Password:</label><br />
      <input type="password" id="confirmPassword" name="confirmPassword" required /><br /><br />

      <input type="submit" value="Submit" />
      <input type="reset" value="Delete" />
    </form>
  );
};

export default Form;