import { memo } from "react";
import { Card, Loader } from "../index";
import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import { api } from "../../api/API";
const index = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(20);
  const [category, setCategory] = useState([]);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPostPage = data.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    api
      .getAll()
      .then((res) => {
        setData(res.data);
        if (res.data) {
          setLoad(true);
          res.data.forEach((item) => {
            if (!category.includes(item.region)) {
              category.push(item.region);
              setCategory(category);
            }
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const filterRegion = (regions) => {
    api.getRegion(regions).then((res) => setData(res.data));
  };
  const filterName = (name) => {
    api.getName(name).then((res) => setData(res.data));
  };

  if (!load) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className="main-wrapper dark">
        <div className="select-option container  d-flex justify-between ">
          <select
            className="form-select w-25"
            onChange={(e) => filterRegion(e.target.value)}
          >
            {category.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <div className="search-input w-25">
            <input
              type="text"
              className="form-control"
              placeholder="search-country"
              onChange={(e) => filterName(e.target.value)}
            />
          </div>
        </div>
        <section className="container-fluid">
          <div className="country">
            {data.length > 0 ? (
              currentPostPage.map((el, i) => {
                return <Card key={i} data={el} />;
              })
            ) : (
              <h3>COUNTRY LIST EMPTY</h3>
            )}
          </div>
          <Pagination
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </div>
    </>
  );
};

export default memo(index);
