import { Age } from "./Age";

export function Welcome({ name,age }) {
  return (
    <>
      <p>
        Welcome,<strong>{name}</strong>!
      </p>
      <Age età={age}></Age>
    </>
  );
}
