import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="pages my-4">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              className="btn btn-outline-primary px-3 py-2 outline-none"
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
