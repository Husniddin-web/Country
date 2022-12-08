import React from "react";
import { Card, Loader } from "../index";
import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import { api } from "../../api/API";
const index = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(20);
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
        }
      })
      .catch((err) => console.log(err));
  }, []);
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

export default index;
