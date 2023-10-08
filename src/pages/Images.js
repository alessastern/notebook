import { useState } from "react";
import "../components/styles.css";
import Image from "../components/Image";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ImageCloseup from "../components/ImageCloseup";
import AddImage from "../components/AddImage";
import Pagination from "../components/Pagination";

function Images() {
  const [images, setImages] = useState();
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [url, setUrl] = useState("http://localhost:8000/api/images/");

  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    getImages(url);
  }, [url]);

  const getImages = (url) =>
    fetch(url, {
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
        setNext(data.next);
        setPrevious(data.previous);
      })
      .catch((err) => alert(err));

  const addImage = (image, description) => {
    let data = new FormData();
    data.append("image", image);
    data.append("description", description);
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authTokens.access}`,
      },
      body: data,
    });
  };

  const editDescription = (id, description) => {
    let data = new FormData();
    data.append("description", description);
    fetch(`http://127.0.0.1:8000/api/images/${id}/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authTokens.access}`,
      },
      body: data,
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
      <AddImage addImage={addImage} />
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
                    ImageCloseup={ImageCloseup}
                  />
                );
              })
            : null}
        </>
      </div>
      <div>
        <Pagination
          previous={previous}
          next={next}
          getImages={getImages}
          setUrl={setUrl}
        />
      </div>
    </div>
  );
}

export default Images;
