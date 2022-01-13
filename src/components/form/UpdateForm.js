import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { getPostById } from "../../services/postService";
import { updatePost } from "../../actions/postAction";
import { toast } from "react-toastify";
const UpdateForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    image: "",
  });
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    getPostById(match.params.id).then((res) => {
      setPostData({
        title: res.data.title,
        message: res.data.message,
        tags: res.data.tags,
        image: res.data.image,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updatePost(
        match.params.id,
        { ...postData, name: user?.user?.username },
        toast,
        history
      )
    );
  };

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3 col-sm-12">
            <h4 className="mb-3 text-center">Gönderi Güncelle</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label id="title">Gönderi Başlığı</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="Lütfen başlık giriniz"
                  value={postData?.title}
                  onChange={(e) =>
                    setPostData({ ...postData, title: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label id="message">Gönderi Mesajı</label>
                <textarea
                  rows={2}
                  type="text"
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Lütfen mesaj giriniz"
                  value={postData?.message}
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
                  value={postData?.tags}
                  onChange={(e) =>
                    setPostData({ ...postData, tags: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2">
                <FileBase
                  multiple={false}
                  value={postData?.image}
                  type="file"
                  onDone={({ base64 }) =>
                    setPostData({ ...postData, image: base64 })
                  }
                />
              </div>
              <div className="form-group my-3">
                <button type="submit" className="btn btn-primary btn-block ">
                  Güncelle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
