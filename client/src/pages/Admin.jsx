import React from "react";
import AddBrand from "../components/modal/AddBrand";
import AddDevice from "../components/modal/AddDevice";
import AddType from "../components/modal/AddType";

const Admin = () => {
  return (
    <div>
      <AddType />
      <AddBrand />
      <AddDevice />
    </div>
  );
};

export default Admin;
