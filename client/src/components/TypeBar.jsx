import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
      <Paper square elevation={3}>
        <Tabs
          value={device.selectedType.id}
          indicatorColor="primary"
          textColor="primary"
          //onChange={handleChange}
        >
          {device.types.map((type) => (
            <Tab
              label={type.name}
              key={type.id}
              onClick={() => device.setSelectedType(type)}
            />
          ))}
        </Tabs>
      </Paper>
    </>
  );
});

export default TypeBar;
