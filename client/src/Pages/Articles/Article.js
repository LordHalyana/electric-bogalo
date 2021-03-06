import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Article from "../../components/cards/Articles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GetArticleID = () => {
  const [article, setArticle] = useState({});
  //const [content, setContent] = useState("");
  let navigate = useNavigate();
  const { _id } = useParams();

  useEffect(() => {
    //console.log("i am in useEffect", _id);
    if (_id) fetchArticle();
  }, [_id]);

  const fetchArticle = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/articles/${_id}`);
      setArticle(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (article) => {
    try {
      const answer = window.confirm(
        "Are you sure you want to delete this article?"
      );
      if (!answer) return;
      const { data } = await axios.delete(
        `http://localhost:5000/articles/${_id}/delete`
      );
      toast.success("Post was deleted");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 text-black">
        <div className="col text-center">
          <h1 className="text-black">{article.title}</h1>
        </div>
      </div>
      <div className="container col-md-8 offset-md-2 pt-5">
        <Article key={_id} article={article} page="view" />
      </div>
      <div className="col text-center">
        <button
          className="btn btn-primary btn-sm mt-1 px-5 mx-2"
          onClick={() => navigate(`/articles/${_id}/update`)}
        >
          Update article
        </button>
        <button
          className="btn btn-danger btn-sm mt-1 px-5 mx-2"
          onClick={() => handleDelete(article)}
        >
          Delete article
        </button>
      </div>
    </div>
  );
};

export default GetArticleID;
