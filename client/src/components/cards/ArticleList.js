import Article from "./Articles";

const ArticleList = ({ articles, page }) => {
  return (
    <>
      {articles &&
        articles.map((article, _id) => <Article key={_id} article={article} />)}
    </>
  );
};

export default ArticleList;
