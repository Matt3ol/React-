import { useRef,useEffect } from "react";

export function FocusableInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form>
        <label htmlFor="name">Text: </label>
        <input id="name" ref={inputRef}></input>
      </form>
    </>
  );
}
