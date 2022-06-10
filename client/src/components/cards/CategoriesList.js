const CategoryList = ({ categories, onChange, page }) => {
  return (
    <>
      {page !== "edit" &&
        categories &&
        categories.map(({ category, _id }) => (
          <div className="list-group" key={_id}>
            <div className="col-md-6">
              <label className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  onChange={(e) => onChange(e, category)}
                  disabled={page === "update"}
                />
                {category}
              </label>
            </div>
          </div>
        ))}

      {page === "edit" &&
        categories &&
        categories.map(({ category, _id }) => (
          <div className="list-group" key={_id}>
            <div className="col-md-6 offset-md-6">
              <ul className="list-group">
                <li className="list-group-item">{category}</li>
                <small>
                  <li className="list-group-item text-muted">{_id}</li>
                </small>
              </ul>
            </div>
          </div>
        ))}
    </>
  );
};

export default CategoryList;
