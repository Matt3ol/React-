import React from 'react';

export  function UncontrolledLogin () {
   const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.elements.username.value;
        const password = form.elements.password.value;
        console.log('Username:', username);
        console.log('Password:', password);
      }

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Login</button>
        </form>
      );

}



