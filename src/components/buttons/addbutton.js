import React from "react";
import { Button, useNavigate } from "../../libraries";

function AddButton(props) {
  const navigate = useNavigate();

  // MARK: Controller action
  const tapOnAdd = () => {
    navigate(props.navigation);
  };

  // MARK:UI
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
