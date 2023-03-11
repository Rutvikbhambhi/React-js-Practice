import React from "react";
import Stack from "@mui/system/Stack";

const Fields = ({name, email, index}) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <h4>Remove</h4>
    </div>  
  );
};

export default Fields;
