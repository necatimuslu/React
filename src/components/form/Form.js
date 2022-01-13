import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/postAction";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    image: "",
  });
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      createPost({ ...postData, creator: user?.user?.username }, toast)
    );
    setPostData({
      title: "",
      creator: "",
      message: "",
      tags: "",
      image: "",
    });
  };

  if (!user?.user?.username) {
    return (
      <div className="row p-5">
        <div className="col-md-7 offset-md-3">
          <h3>
            Gönderi paylaşmak için lütfen <Link>giriş</Link> yapınız
          </h3>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <h4 className="text-center mt-2">Gönderi Oluştur</h4>
        <form className="mx-1 my-1" onSubmit={handleSubmit}>
          <div className="form-group">
            <label id="title">Gönderi Başlığı</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              placeholder="Lütfen başlık giriniz"
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label id="message">Gönderi Mesajı</label>
            <textarea
              rows={3}
              type="text"
              id="message"
              name="message"
              className="form-control"
              placeholder="Lütfen mesaj giriniz"
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label id="tags">Gönderi Tagları</label>
            <input
              type="text"
              id="tags"
              name="tags"
              className="form-control"
              placeholder="Lütfen yazar giriniz"
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
            />
          </div>
          <div className="form-group my-2">
            <FileBase
              multiple={false}
              type="file"
              onDone={({ base64 }) =>
                setPostData({ ...postData, image: base64 })
              }
            />
          </div>
          <div className="form-group my-3">
            <button type="submit" className="btn btn-primary btn-block ">
              Oluştur
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
