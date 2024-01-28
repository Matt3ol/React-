export function MouseClicker() {
  const handleClick = (event) => {
    console.log(event.currentTarget.name);
  };

  const handleClickImage = (event) => {
    console.log(event.target.src);
    event.stopPropagation();
  };
  return (
    <button name="one" onClick={handleClick} >
      <img onClick={handleClickImage} src="#" alt="#" width={20} height={20} ></img>
      click!
    </button>
  );
}
