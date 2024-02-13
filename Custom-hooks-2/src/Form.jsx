import React from "react";
import { UseForm } from "./UseForm";

export function Form() {
  const { formData, handleInputChange, handleSubmit } = UseForm();

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Invia</button>
    </form>
  );
}