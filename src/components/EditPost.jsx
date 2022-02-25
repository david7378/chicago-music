import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("/api/post/getpostdata", { postid: params.postid })
      .then((res) => {
        console.log(res.data);
        const postdata = res.data[0];
        setTitle(postdata.title);
        setImageurl(postdata.imageurl);
        setDescription(postdata.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  function editpost() {
    const updatedpost = {
      title: title,
      imageurl: imageurl,
      description: description,
      postid: params.postid,
    };

    axios
      .post("/api/post/updatepost", updatedpost)
      .then((res) => {
        alert(res.data);
        navigate("/postlist");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <body className="background-image3 ">
      <div className="container contain mt-5 col-md-4   ">
        <div className="row ">
          <h1 className="add mb-3">Editar Track</h1>

          <div className="col-lg-12 mt-2 border-top px-4">
            <div className="row g-3 ">
              <input
                type="text"
                placeholder="Nombre del productor"
                className="g-4 mt-4 form-control"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="vinculo"
                className="form-control"
                hidden
                value={imageurl}
                onChange={(e) => {
                  setImageurl(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="URL de la imagen"
                className="form-control"
                value={imageurl}
                onChange={(e) => {
                  setImageurl(e.target.value);
                }}
              />
              <textarea
                rows="3"
                placeholder="Descripcion"
                className="form-control"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            <div className="mt-2 ">
              <button
                onClick={editpost}
                className="btn rounded-pill mb-4 mt-2 "
                id="addbtn"
              >
                Edit Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default EditPost;
