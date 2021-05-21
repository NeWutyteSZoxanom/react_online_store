import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <>
      <Paper square elevation={3}>
        <Tabs
          value={device.selectedBrand.id - 1}
          indicatorColor="primary"
          textColor="primary"
          //onChange={handleChange}
        >
          {device.brands.map((brand) => (
            <Tab
              label={brand.name}
              key={brand.id}
              onClick={() => device.setSelectedBrand(brand)}
            />
          ))}
        </Tabs>
      </Paper>
    </>
  );
});

export default BrandBar;
