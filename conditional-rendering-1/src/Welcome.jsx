import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <>
      <p>
        Welcome,<strong>{name}</strong>!
      </p>
      {age > 18 && <Age età={age}> is greater than 18 </Age>}
      {age && <Age età={age}>present</Age>}
      {age > 18 && age <= 65 && (
        <Age età={age}>prop is greater than 18 and less than 65</Age>
      )}
      {age > 18 && age <= 65 && name === "Jhon" && (
        <Age età={age}>
          prop is greater than 18, less than 65 and the name prop is equal to
          "John".
        </Age>
      )}
    </>
  );
}
