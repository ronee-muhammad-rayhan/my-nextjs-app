import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  //   console.log(params);
  //   http://localhost:3013/products/1?category=laptop&price=100000
  // react extension pack and console ninja
  return (
    <div>
      <h1>This is dynamic page {params.id}</h1>
      <h1>Search by {searchParams.category}</h1>
    </div>
  );
};

export default DynamicPage;
