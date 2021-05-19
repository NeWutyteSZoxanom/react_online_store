import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import Paper from "@material-ui/core/Paper";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <>
      {device.device.map((devic) => (
        <DeviceItem key={devic.id} device={devic} />
      ))}
    </>
  );
});

export default DeviceList;
