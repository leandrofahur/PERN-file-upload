import React, { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      "http://localhost:5000/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);
  };

  return (
    <div className="ui container" style={{ paddingTop: "25%" }}>
      <div className="ui centered card">
        <div
          className="ui image centered"
          // style={{ width: "100%", margin: "50%" }}
        >
          <img
            src={`${URL.createObjectURL(image)}`}
            height="300px"
            width="300px"
          />
          {/* <i class="user circle icon"></i> */}
        </div>
        <div className="content">
          <form
            encType="multipart/form-data"
            className="ui form"
            onSubmit={(e) => onSubmitForm(e)}
          >
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div>
              <button
                style={{ marginTop: "20px" }}
                className="ui primary button fluid"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
