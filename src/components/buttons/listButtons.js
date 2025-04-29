import React from "react";
import { Button, ToastContainer } from "../../libraries";

function ListButtons(props) {
  return (
    <div className="d-flex mt-3 text-start">
      <Button
        type="button"
        className="lists__edit_button"
        onClick={props.editclick}
        tooltip="edit"
        tooltipOptions={{ position: "bottom" }}
      >
        <span className="pi pi-pencil"></span>
      </Button>
      <Button
        severity="secondary"
        type="button"
        onClick={props.deleteclick}
        className="lists__delete_button"
        tooltip="delete"
        tooltipOptions={{ position: "bottom" }}
      >
        <span className="pi pi-trash"></span>{" "}
      </Button>
      <ToastContainer />
    </div>
  );
}

export default ListButtons;
