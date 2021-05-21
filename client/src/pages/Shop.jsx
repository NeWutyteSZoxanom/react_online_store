import React, { useState, useEffect, useContext } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTypes, fetchBrand, fetchDevices } from "../https/deviceApi";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrand().then((data) => device.setBrands(data));
    fetchDevices().then((data) => device.setDevices(data.rows));
  }, []);
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
});

export default Shop;
