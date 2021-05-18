import React from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <div className="shop_page">
      <div className="panel_brand">
        <BrandBar />
      </div>
      <div className="panel_brand">
        <TypeBar />
      </div>
      <div className="shop_content">
        <div className="decises">
          <div className="decise_c_block">
            <DeviceList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
