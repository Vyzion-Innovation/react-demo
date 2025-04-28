import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

function AddButton(props) {
  const navigate = useNavigate();
  const tapOnAdd = () => {
    navigate(props.navigation);
  };

  return (
    <Button
      label="Add"
      type="button"
      onClick={tapOnAdd}
      className="lists__add_button"
    />
  );
}

export default AddButton;
