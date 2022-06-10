import moment from "moment";
import useCollapse from "react-collapsed";

const Article = ({ article, page }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div key={article._id} className="card mb-5">
      <div className="card-header">
        {page !== "view" ? (
          <a href={`/articles/${article._id}`} style={{ color: "black" }}>
            <span
              className="pt-2 ml-3 "
              style={{
                marginLeft: "1rem",
                textAlign: "center",
                fontSize: "1.5rem",
              }}
            >
              {article.title}
            </span>
          </a>
        ) : (
          <span
            className="pt-2 ml-3 "
            style={{
              marginLeft: "1rem",
              textAlign: "center",
              fontSize: "1.5rem",
            }}
          >
            {article.title}
          </span>
        )}
      </div>
      <div className="card-body">
        {article.description && (
          <small
            className="my-2 mx-2"
            style={{ fontStyle: "italic", fontSize: "1rem" }}
          >
            {article.description} <br /> <br />{" "}
          </small>
        )}

        <div>
          <section {...getCollapseProps()}>{article.content}</section>
          <button className="btn btn-primary mt-2" {...getToggleProps()}>
            {isExpanded ? "Close" : "Read more..."}
          </button>
        </div>
      </div>
      <div className="card-footer">
        <span className="my-2" style={{ color: "blue" }}>
          {article.categories + ", "}
        </span>
        <span className="text-muted my-2 mx-2">
          {moment(article.createdAt).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default Article;
