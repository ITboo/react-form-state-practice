import { useState } from "react";

function DefaultForm() {
  const [nameInput, setNameInput] = useState("");
  const [cityInput, setCityInput] = useState("");

  return (
    <>
      <h2>Default form with controlled input</h2>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          console.log("submitted");
        }}
      >
        <input
          type="text"
          name=""
          id=""
          value={nameInput}
          onChange={(event) => {
            console.log(event.target.value);
            setNameInput(event.target.value);
          }}
        />
                <input
          type="text"
          name=""
          id=""
          value={cityInput}
          onChange={(event) => {
            console.log(event.target.value);
            setCityInput(event.target.value);
          }}
        />      
        <button type="submit">Submit</button>
      </form>
  
    </>
  );
}

export default DefaultForm;
