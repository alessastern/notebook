import { useState } from "react";
import "../components/styles.css";
import Image from "../components/Image";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Images() {
  const [images, setImages] = useState();
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () =>
    fetch("http://localhost:8000/api/images/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("something went wrong");
      })
      .then((data) => {
        setImages(data.results);
      })
      .catch((err) => alert(err));

  const editDescription = (id, description) => {
    let obj = {};
    obj.description = description;
    fetch(`http://127.0.0.1:8000/api/images/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
      body: JSON.stringify(obj),
    });
  };

  const deleteImage = (id) => {
    fetch(`http://127.0.0.1:8000/api/images/${id}/`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${authTokens.access}` },
    });
  };

  const showImage = (image) => {
    return window.open(image);
  };

  return (
    <div className="pagecontainer">
      <div className="addButtonDiv">
        <button className="addButton">Add an image</button>
      </div>
      <div className="flexcontain">
        <>
          {images
            ? images.map((image) => {
                return (
                  <Image
                    key={image.id}
                    id={image.id}
                    image={image.image}
                    description={image.description}
                    editDescription={editDescription}
                    showImage={showImage}
                    deleteImage={deleteImage}
                  />
                );
              })
            : null}
        </>
      </div>
    </div>
  );
}

export default Images;
