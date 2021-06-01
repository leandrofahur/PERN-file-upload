import React, { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      "http://localhost:5000/upload",
      { formData },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={(e) => onSubmitForm(e)}>
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <div>
          <button style={{ marginTop: "20px" }} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
