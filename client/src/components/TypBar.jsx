import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const TypBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
      {device.types.map((type) => (
        <Paper
          elevation={3}
          className="panel_type_p"
          key={type.id}
          square={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
        >
          <div>{type.name}</div>
        </Paper>
      ))}
    </>
  );
});

export default TypBar;
